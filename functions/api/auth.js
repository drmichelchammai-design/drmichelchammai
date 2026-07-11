function renderMessagePage(status, payload) {
  var message;
  if (status === "success") {
    message = "authorization:github:success:" + JSON.stringify({ token: payload, provider: "github" });
  } else {
    message = "authorization:github:error:" + JSON.stringify({ message: payload });
  }

  var messageJson = JSON.stringify(message);

  var html = "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Auth " + status + "</title></head><body>";
  html += "<script>";
  html += "(function() {";
  html += "function receiveMessage(e) {";
  html += "window.opener.postMessage(" + messageJson + ", e.origin);";
  html += "window.removeEventListener('message', receiveMessage, false);";
  html += "}";
  html += "window.addEventListener('message', receiveMessage, false);";
  html += "window.opener.postMessage('authorizing:github', '*');";
  html += "})();";
  html += "</script>";
  html += "<p>You can close this window now.</p>";
  html += "</body></html>";

  return html;
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const cookieHeader = request.headers.get("Cookie") || "";
  const match = cookieHeader.match(/oauth_state=([^;]+)/);
  const savedState = match ? match[1] : null;

  if (!code || !state || !savedState || state !== savedState) {
    return new Response(renderMessagePage("error", "Invalid request (state mismatch)"), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
      status: 400,
    });
  }

  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code: code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error || !tokenData.access_token) {
      return new Response(
        renderMessagePage("error", tokenData.error_description || "Failed to get token"),
        {
          headers: { "Content-Type": "text/html; charset=utf-8" },
          status: 400,
        }
      );
    }

    return new Response(renderMessagePage("success", tokenData.access_token), {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Set-Cookie": "oauth_state=; Path=/; Max-Age=0",
      },
    });
  } catch (err) {
    return new Response(renderMessagePage("error", "Unexpected error during authentication"), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
      status: 500,
    });
  }
}
