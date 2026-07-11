export async function onRequestGet(context) {
  const { env } = context;

  const clientId = env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response("GITHUB_CLIENT_ID غير معرّف في متغيرات البيئة", {
      status: 500,
    });
  }

  const state = crypto.randomUUID();

  const redirectUri = new URL("/api/callback", context.request.url).toString();

  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "repo,user");
  authorizeUrl.searchParams.set("state", state);

  const response = Response.redirect(authorizeUrl.toString(), 302);
  response.headers.append(
    "Set-Cookie",
    oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600
  );
  return response;
}
