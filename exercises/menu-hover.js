const menuLink = document.querySelectorAll(".menu-hover--item")
const effect = document.createElement("div")
effect.classList.add("effect-link")
document.body.appendChild(effect)
menuLink.forEach((item)=>{
    item.addEventListener("mouseover", (e)=>{
        console.log(e.target)
        const cord = e.target.getBoundingClientRect()
        const {height, top, left, width} = cord
        effect.style.width = `${width - 40}px`
        effect.style.top = `${top+height+5 - 20}px`
        effect.style.left = `${left + 20}px`
        console.log(cord)   
    })

    item.addEventListener("mouseleave", (e)=>{
            effect.style.width = "0px"
        // console.log(cord)
    })
})