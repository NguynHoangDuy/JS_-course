// async function getPost() {
//   const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await respone.json();
//   console.log(data);
//   data.forEach((item) => {
//     rederItem(item);
//   });
// }
// const rederItem = (item) => {
//   const template = `
//     <div class="post-item">
//     <p class="post-title">${item.title}</p>
//     <p class="post-body">${item.body}</p>
//     </div>`;
//   document.querySelector(".post").insertAdjacentHTML("beforeend", template);
// };
// getPost();

function arrToObj(arr) {
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i][0];
    const value = arr[i][1];
    newObj = {
      ...newObj,
      [key]: value,
    };
  }
  return newObj;
}

const obj1 = arrToObj([
  ["name", "Son Dang"],
  ["age", 21],
  ["address", "Ha Noi"],
]);
console.log(obj1);
