document.getElementById("year").textContent = String(new Date().getFullYear());
const copy = document.getElementById("copy-email");
if(copy) copy.addEventListener("click", async () => { const text="merttorun@ucsb.edu"; const status=document.getElementById("copy-status"); try { await navigator.clipboard.writeText(text); status.textContent="Copied"; } catch { status.textContent="Select the email address above to copy"; } });
