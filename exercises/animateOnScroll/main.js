window.addEventListener("scroll", (e)=>{
    console.log(window.pageYOffset)
    const img = document.querySelectorAll(".img")
    console.log(window.x)
    img.forEach((item)=>{
        if(window.pageYOffset > (item.offsetTop - item.offsetHeight))
        {
            item.classList.add("active")
        }   
    })
})