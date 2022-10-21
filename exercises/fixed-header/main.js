
const menu = document.querySelector(".header-menu")
const banner = document.querySelector(".header-banner")

const row = document.querySelector(".row")
console.log(document.body.scrollHeight)
const progress = document.querySelector(".progress")
window.addEventListener("scroll", ()=>{
    progress.style = `width: ${((window.pageYOffset/(document.documentElement.scrollHeight - document.documentElement.clientHeight))*100)}% !important;`
    if(window.pageYOffset >= (banner.offsetHeight ))
    {
        menu.classList.add("header-menu--fixed")
        row.style= `padding-top: ${menu.offsetHeight}px`
        
        
    }
    else{
        menu.classList.remove("header-menu--fixed")
        row.style= "padding-top: 0px"
    }
}
)