// text content
// trả về nội dung nằm giữa selector

const text = document.querySelector(".container")
// text.textContent = "Hello Nguyễn Hoàng Duy"
console.log(text.textContent.trim())
//inner text
//trong text content có thẻ html display none thì không lấy được
console.log(text.innerText)


//immer HTML lấy ra nội dung của selector bao gồm cả html

