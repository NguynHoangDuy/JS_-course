

const btn = document.querySelector(".btn")
const span = document.querySelector(".btn span")
btn.addEventListener("click" , ()=>{
    console.log("Hello mấy cưng btn")
})

span.addEventListener("click" , (e)=>{
    e.stopImmediatePropagation()
    console.log("Hello mấy cưng span")
})


//event.target - event-currentTarget

//event.preventDefault() Ngăn cản hành vi mặc định

const link = document.querySelector(".link")

link.addEventListener("click" , (event)=>{
    event.preventDefault()
    console.log("click me")
})