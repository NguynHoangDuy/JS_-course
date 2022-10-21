window.addEventListener("load", ()=>{
    const text = document.querySelector(".text")
    text.addEventListener("mouseenter", (e)=>{
        const tooltipText = e.target.dataset.tooltipText
        const tooltipDiv = document.createElement("div")
        tooltipDiv.classList.add("tooltip-text")
        tooltipDiv.textContent = tooltipText
        console.log(tooltipDiv.textContent)
        document.body.appendChild(tooltipDiv)
        console.log(tooltipDiv)

        const cords = e.target.getBoundingClientRect();
        console.log(cords.left)
        tooltipDiv.style.top = `${cords.top-cords.height}px`
        console.log(e.target.offsetWidth)
        // tooltipDiv.style.left = `${cords.left}px`
    })

    text.addEventListener("mouseleave", (e)=>{
        const tooltipDiv = document.querySelector(".tooltip-text")
        if(tooltipDiv)
        {
            tooltipDiv.parentElement.removeChild(tooltipDiv)
        }
    })
})

