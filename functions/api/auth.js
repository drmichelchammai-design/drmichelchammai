export async function onRequestGet(context) {
  const { env } = context;
  const hasId = typeof env.GITHUB_CLIENT_ID === "string" && env.GITHUB_CLIENT_ID.length > 0;
  const hasSecret = typeof env.GITHUB_CLIENT_SECRET === "string" && env.GITHUB_CLIENT_SECRET.length > 0;

  return new Response(
    JSON.stringify({ hasId, hasSecret }),
    { headers: { "Content-Type": "application/json" } }
  );
}
