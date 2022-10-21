const tabScroll = document.querySelector(".tab-list")
const tabLink = document.querySelectorAll(".tab-link")
const active = document.querySelector(".is-active")
const withFisrtTab = tabLink[0].offsetWidth
const withLastTab = tabLink[tabLink.length-1].offsetWidth
tabLink.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        e.preventDefault()
        const left = item.offsetLeft - 10
        const width = item.parentNode.offsetWidth
        active.style.width = `${width}px`
        active.style.left = `${left}px`
            tabScroll.scroll(left/2, 0)
            check()
    })
    
})

tabScroll.addEventListener("wheel", ()=>{
    check()
})

const tabPre = document.querySelector(".tab-pre")
const tabNext = document.querySelector(".tab-next")
tabNext.addEventListener("click", ()=>{
    tabScroll.scrollLeft += 40
    if(tabScroll.scrollWidth - tabScroll.offsetWidth - tabScroll.scrollLeft < 40 )
    tabScroll.scrollLeft = tabScroll.scrollWidth - tabScroll.offsetWidth
    else
    tabScroll.scrollLeft += 40
    check()
})
tabPre.addEventListener("click", ()=>{
    tabScroll.scrollLeft -= 40
    if(tabScroll.scrollLeft <= 40)
    tabScroll.scrollLeft =0
    else tabScroll.scrollLeft -= 40
    check()
})
console.log(tabScroll.scrollLeft)

console.log()

function check() {
    if(tabScroll.scrollLeft >= tabScroll.scrollWidth - tabScroll.offsetWidth - withLastTab)
{
    tabNext.style = "opacity: 0; visibility: hidden;"
}
else {
    tabNext.style = "opacity: 1; visibility: visible;"
}

if(tabScroll.scrollLeft <= 0 + withFisrtTab)
{
    tabPre.style = "opacity: 0; visibility: hidden;"
}
else {
    tabPre.style = "opacity: 1; visibility: visible;"
}

}

check()

