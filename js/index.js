// index.js
// Handles form submission and redirects to proposal page

const form = document.getElementById("proposalForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // page reload rokta hai

  const name = document.getElementById("name").value.trim();
  const msg = document.getElementById("message").value.trim();

  if (!name || !msg) {
    alert("Please fill both fields ❤️");
    return;
  }

  // Encode to safely send via URL (spaces, emojis, etc.)
  const encodedName = encodeURIComponent(name);
  const encodedMsg = encodeURIComponent(msg);

  // Redirect to proposal page with data
  window.location.href = `proposal.html?name=${encodedName}&msg=${encodedMsg}&creator=true`;
});
