async function fetchImages() {
  const promise = await fetch("https://picsum.photos/v2/list?limit=8");
  const data = await promise.json();
  return data;
}
const gallary = document.querySelector(".gallary");
async function getImage() {
  const listImage = await fetchImages();
  // console.log(listImage);
  listImage.forEach((item) => {
    gallary.insertAdjacentHTML(
      "beforeend",
      `<div class="gallary-item">
    <img
      src="${item.download_url}"
      alt=""
      class="gallary-img"
    />
  </div>`
    );
    console.log();
  });
}
getImage();
