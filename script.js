document.getElementById("year").textContent = new Date().getFullYear();

function fakeSubmit(e){
  e.preventDefault();
  const hint = document.getElementById("hint");
  hint.textContent = "Message OK ✅ (si tu veux un vrai formulaire gratuit, je te donne la config Netlify Forms).";
  e.target.reset();
  return false;
}
