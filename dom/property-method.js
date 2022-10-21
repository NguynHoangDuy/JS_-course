// get attribute  Lấy ra giá trị attribute selector mà ta muốn

const link = document.querySelectorAll(".link")

// console.log(link.getAttribute("href"))
link.forEach((item)=> {item.setAttribute("target", "_blank")})
// link.setAttribute("target", "_blank")


link.forEach((item) => {item.hasAttribute("target")? item.removeAttribute("target") : console.log("Không có má ơi")})