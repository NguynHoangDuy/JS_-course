//1. parentNode - parentElement, removeChild

//parentNode - parentElement

//selector.parentNode.removeChild(selector)
const span = document.querySelector("span")
//nextElementSibling: Đến phần tử kế tiếp
//previousElementSibling: Đến phần tử đứng sau
const nextSpan =  span.nextElementSibling;
console.log(nextSpan)

//childNode: trả về hết các node bên trong (Node List)
//children: (HTML colection)

//firstChild - firstElementChild

//lastChild - lastElementChild

//nextSibling - previousSibling