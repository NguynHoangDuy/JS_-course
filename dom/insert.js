//insertAdjacentText Có thể chọn vị trí (4 vị trí)
// beforebegin
//afterbegin
//beforeend
//afterend

const h3 = document.querySelector("h3")

h3.insertAdjacentText("beforebegin", "Begin")
h3.insertAdjacentText("afterbegin", "After begin")
h3.insertAdjacentText("beforeend", "Hello end")
h3.insertAdjacentText("afterend", "After End")

//insertAdjacentElement

//insertAdjacentHTML