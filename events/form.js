//KeyDown
const input = document.querySelector(".input")
// input.addEventListener("keydown", (e)=>{
// console.log(placeholder)
// })

const btn = document.querySelector(".btn")
// input.addEventListener("keydown" , (e)=>{
//     console.log("Keydown")
// })
// input.addEventListener("keyup" , (e)=>{
//     console.log("Keyup")
// })

// input.addEventListener("keypress", ()=>{
//     console.log("Keypress")
// })
// btn.addEventListener("click", ()=>{
//     input.setAttribute("style", "color: red")
//     console.log(input.placeholder)
//     // input.style.placeholderColor = "red"
//     const style = document.createElement("style")
//     style.type = "text/css"
//     const {
//     sheet
//     } = document.head.appendChild(style)

//     const rule = sheet.insertRule("::placeholder {}")
//     const placeholderStyle = sheet.rules[rule].style;
//     placeholderStyle.color = "red";
// })

//4 change 

input.addEventListener("change", ()=>{
    console.log("con mèo")
})

//5. focus

input.addEventListener("focus", ()=>{
    console.log("Tao đang được focus")
})

//6. blur
input.addEventListener("blur", ()=>{
    console.log("Tao bị blur")
})

const form = document.querySelector(".form")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const username = e.target["username"].value
    console.log(username)
})