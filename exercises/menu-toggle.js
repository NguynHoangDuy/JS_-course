const btnToggle = document.querySelector(".menu-toggle")
const icon = document.querySelector(".menu-toggle--icon")
const menu = document.querySelector(".menu")
btnToggle.addEventListener("click", ()=>{
    icon.classList.toggle("fa-bars")
    icon.classList.toggle("fa-close")
    menu.classList.toggle("is-active")  
})

document.addEventListener("click", (e)=>{
    if(!menu.contains(e.target) && !btnToggle.contains(e.target))
    {
        menu.classList.remove("is-active")
        // console.log("Hello mấy cưng")
    }
})