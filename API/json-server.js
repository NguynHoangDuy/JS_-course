// function addPost(title, author) {
//   fetch("http://localhost:3000/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title,
//       author,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }
// document.querySelector(".form-post").addEventListener("submit", function (e) {
//   e.preventDefault();
//   const title = this.elements["title"].value;
//   const author = this.elements["author"].value;
//   addPost(title, author);
// });
const formPost = document.querySelector(".form-post");
const formSubmit = document.querySelector(".form-submit");
async function addCourse({
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  buyAmount,
}) {
  await fetch("http://localhost:3000/courses", {
    method: "POST",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmount,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

const courseList = document.querySelector(".course-list");
let updateId = null;
function renderItem(item) {
  const template = `<div class="course-item">
    <img
      src="${item.image}"
      alt=""
      class="course-img"
    />
    <div class="course-content">
      <p class="course-title">${item.title}</p>
      <p class="course-author">${item.author}</p>
      <div class="course-group">
        <span class="course-star">${item.rating}</span>
        <span class="course-amount">${item.buyAmount}</span>
      </div>
      <p class="course-price">${item.price}</p>
      ${item.bestSeller ? '<p class="course-best--seller">Best Seller</p>' : ""}
      
    </div>
    <button class="course-remove" data-id="${item.id}">x</button>
    <button class="course-edit" data-id="${item.id}">Edit</button>
  </div>`;
  courseList.insertAdjacentHTML("beforeend", template);
}

async function getCourse() {
  const respone = await fetch("http://localhost:3000/courses");
  const data = await respone.json();
  console.log(data);
  data.forEach((element) => {
    renderItem(element);
  });
}
getCourse();

formPost.addEventListener("submit", async function (e) {
  e.preventDefault();
  const course = {
    image: this.elements["image"].value,
    title: this.elements["title"].value,
    author: this.elements["author"].value,
    rating: this.elements["rating"].value,
    price: this.elements["price"].value,
    bestSeller: this.elements["bestSeller"].checked,
    buyAmount: this.elements["buyAmount"].value,
  };
  courseList.innerHTML = "";
  if (updateId) {
    await updateCourse({ updateId, ...course });
    formSubmit.textContent = "Add course";
    getCourse();
  } else {
    await addCourse(course);
    getCourse();
  }
  this.reset();
});
async function removeCourse(id) {
  await fetch(`http://localhost:3000/courses/${id}`, {
    method: "DELETE",
  });
}
courseList.addEventListener("click", function (e) {
  if (e.target.matches(".course-remove")) {
    removeCourse(e.target.dataset.id);
    courseList.innerHTML = "";
    getCourse();
  } else if (e.target.matches(".course-edit")) {
    updateId = e.target.dataset.id;
    getItem(updateId);
    console.log(formSubmit);
    formSubmit.textContent = "Update course";
  }
});
async function getItem(id) {
  const respone = await fetch(`http://localhost:3000/courses/${id}`);
  const data = await respone.json();
  console.log(data);
  formPost.elements["image"].value = data.image;
  formPost.elements["title"].value = data.title;
  formPost.elements["author"].value = data.author;
  formPost.elements["rating"].value = data.rating;
  formPost.elements["price"].value = data.price;
  formPost.elements["bestSeller"].checked = data.bestSeller;
  formPost.elements["buyAmount"].value = data.buyAmount;
}
async function updateCourse({
  updateId,
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  buyAmount,
}) {
  fetch(`http://localhost:3000/courses/${updateId}`, {
    method: "PUT",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmount,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
