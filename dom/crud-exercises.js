const body = document.querySelector("body")

const div1 = document.createElement("div")

div1.classList.add("card")
body.appendChild(div1)
const img = document.createElement("img")
div1.appendChild(img)
img.classList.add("card-image")
img.setAttribute("src", "https://source.unsplash.com/random")
console.log(body)