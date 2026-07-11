function renderMessagePage(status, payload) {
  const message =
    status === "success"
      ? `authorization:github:success:${JSON.stringify({
          token: payload,
          provider: "github",
        })}`
      : authorization:github:error:${JSON.stringify({ message: payload })};

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Auth ${status}</title></head>
<body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(
      ${JSON.stringify(message)},
      e.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
<p>يمكنك إغلاق هذه النافذة الآن.</p>
</body>
</html>`;
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
    return new Response(renderMessagePage("error", "طلب غير صالح (state mismatch)"), {
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
        code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error || !tokenData.access_token) {
      return new Response(
        renderMessagePage("error", tokenData.error_description || "فشل الحصول على التوكن"),
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
    return new Response(renderMessagePage("error", "خطأ غير متوقع أثناء المصادقة"), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
      status: 500,
    });
  }
}
