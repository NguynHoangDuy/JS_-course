const imgModal = document.querySelectorAll(".album-item")
const img = document.querySelectorAll(".album-img")
imgModal.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
    document.body.insertAdjacentHTML("beforeend", 
    `<div class="modal">
    <div class="modal-content">
    <i class="fa fa-close modal-icon--close"></i>
    <img src="${img[index].getAttribute("src")}" alt="" class="modal-img">
    </div>
    </div>`)
    const modal = document.querySelector(".modal")
    modal.addEventListener("click", (e)=>{
        if(e.target ===  modal)
        {
            modal.parentElement.removeChild(modal)
        }
    })
    const btnClose = document.querySelector(".modal-icon--close")
    btnClose.addEventListener("click", ()=>{
        modal.parentElement.removeChild(modal)
    }) 
    })
})



