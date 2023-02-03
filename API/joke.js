const jokeContent = document.querySelector(".joke-content");
let template = ` <div class="loading">
<div class="loading-dot"></div>
<div class="loading-dot"></div>
<div class="loading-dot"></div>
<div class="loading-dot"></div>
<div class="loading-dot"></div>
</div>`;
async function showJoke() {
  const promise = await fetch("https://i  canhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await promise.json();
  jokeContent.textContent = data.joke;
  document.querySelector(".loading").remove();
  return data;
}
showJoke();

document.querySelector(".joke-reset").addEventListener("click", async () => {
  jokeContent.textContent = "";
  if (document.querySelector(".loading")) {
    document.querySelector(".loading").remove();
  }
  jokeContent.insertAdjacentHTML("beforeend", template);
  const data = await showJoke();
  jokeContent.textContent = data.joke;
  document.querySelector(".loading").remove();
});
