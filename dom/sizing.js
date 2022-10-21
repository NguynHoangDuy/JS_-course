const boxed = document.querySelector(".boxed")
boxed.setAttribute("style" , "box-sizing: border-box; display: inline-block")
console.log(boxed.getAttribute("style"))
console.log(boxed.offsetWidth)
console.log(boxed.offsetHeight)
console.log(boxed.offsetLeft)
console.log(boxed.offsetTop)
console.log(boxed.offsetParent)


//client
console.log(boxed.clientWidth)
console.log(boxed.clientLeft)

//windown.innerWidth
console.log(window.innerHeight)
console.log(window.outerWidth)
console.log(window.outerHeight)
//selector.getBoundingClientRect() -> lấy tọa độ, kích thước của phần tử
//trả về 1 object
console.log(boxed.getBoundingClientRect())


const li = document.querySelectorAll("li") //Node List
const li2 = document.getElementsByTagName("li") // HTML colection

//Điểm giống: có thể truy cập bằng index và có độ dài length, giống mảng nhưng không sử dụng được các phương thức đã học như pop, push, shift, map, filter

//Điểm khác:
//HTML colection: không sử dụng được forEach
//Node List: sử dụng được forEach


//Điểm khác nhau giữa parentNode và parentElement
//Node: textNode - commentElement: không bao giờ null
//Element: có thể null

