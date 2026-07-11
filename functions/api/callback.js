// functions/api/callback.js
// يستقبل authorization code من GitHub، يبادله بـ access token،
// ثم يرسله إلى نافذة Decap CMS عبر window.postMessage

function renderMessagePage(status, payload) {
  // status: "success" | "error"
  // payload: token string (success) أو نص الخطأ (error)
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
