function generateState() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  const state = generateState();

  const redirectUri = url.origin + "/api/callback";

  const githubAuthUrl =
    "https://github.com/login/oauth/authorize" +
    "?client_id=" + encodeURIComponent(env.GITHUB_CLIENT_ID) +
    "&redirect_uri=" + encodeURIComponent(redirectUri) +
    "&scope=repo,user" +
    "&state=" + encodeURIComponent(state);

  return new Response(null, {
    status: 302,
    headers: {
      Location: githubAuthUrl,
      "Set-Cookie":
        "oauth_state=" + state +
        "; Path=/; Max-Age=600; Secure; HttpOnly; SameSite=Lax",
    },
  });
}
