//selector.classList.add("abc")
//selector.classList.remove("abc")
//selector.classList.contains("abc")
//selector.classList.toggle("abc")

//selector.className // trả về tất cả các className


const menu = document.querySelector(".menu")
const btnToggle = document.querySelector(".btn-toggle")

btnToggle.addEventListener("click",
    () => {
        menu.classList.toggle("is-active")
    }
)


