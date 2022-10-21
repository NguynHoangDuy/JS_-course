const lightItem = document.querySelectorAll(".lightBox-item")
const imgItem = document.querySelectorAll(".lightBox-img")
imgItem.forEach((item, index) =>{
    let currentItem = index
    item.addEventListener("click", ()=>{
        document.body.insertAdjacentHTML("beforeend", `
        <div class="modal">
        <div class="light-content">
            <i class="fa fa-angle-left modal-icon--left"></i>
            <img src="${imgItem[index].getAttribute("src")}" alt="" class="light-img">
            <i class="fa fa-angle-right modal-icon--right"></i>
        </div>
        </div>`)
        const lightModal = document.querySelector(".modal")
        // console.log(lightModal)
        lightModal.addEventListener("click", (e)=>{
            if(e.target ===  lightModal)
            {
                lightModal.parentElement.removeChild(lightModal)
            }
        })
        

        const rightModal = document.querySelector(".modal-icon--right")
        rightModal.addEventListener("click", ()=>{
            if(currentItem === imgItem.length - 1)
            currentItem = -1
            document.querySelector(".light-img").setAttribute("src",
            `${imgItem[++currentItem].getAttribute("src")}`)
        })
        const leftModal = document.querySelector(".modal-icon--left")
        leftModal.addEventListener("click", ()=>{
            if(currentItem === 0)
            currentItem = imgItem.length
            document.querySelector(".light-img").setAttribute("src",
            `${imgItem[--currentItem].getAttribute("src")}`)
        })
    })
})
