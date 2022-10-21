const btn = document.querySelector(".btn")


function createSweet() {
    const template = `<div class="sweetAlert">
    <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-checked-interface-dreamstale-lineal-dreamstale-2.png" alt="" class="sweetAlert-icon">
    <p class="sweetAlert-text">
        Congratulation to complete the course
    </p>
</div>`
    document.body.insertAdjacentHTML("beforeend", template)
}

btn.addEventListener("click", ()=>{
    createSweet()
    setTimeout(function () {
        document.body.removeChild(document.querySelector(".sweetAlert"))
    }, 2000)
})
