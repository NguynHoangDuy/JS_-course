

const btn = document.querySelector(".btn")

btn.addEventListener("click", ()=>{
    let color = Math.floor(Math.random() * (999999 - 100000) + 100000)
    console.log(color)
    document.body.style.backgroundColor= `#${color}`
})