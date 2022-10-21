// Thêm xóa sửa node trong javaScript

//1. Tạo ra Element trong javaScript: document.createElement("")
const div = document.createElement("div")
//2. selector.appendChild
div.classList.add("container")

const body = document.querySelector("body")
div.textContent = "Hello cả nhà yêu của kem"
body.appendChild(div)

//document.createTextNode

//document.cloneNode