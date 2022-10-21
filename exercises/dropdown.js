
const clickDropDown = document.querySelector(".dropdown-action")
const titleAction = document.querySelector(".dropdown-desc-action")
console.log(titleAction)
const iconDropdown = document.querySelector(".dropdown-icon-action")
const listItem = document.querySelectorAll(".dropdown-item")
const listTitle = document.querySelectorAll(".dropdown-desc")
console.log(listTitle)
const dropdownList = clickDropDown.nextElementSibling
clickDropDown.addEventListener("click" , (e)=>{
    dropdownList.classList.toggle("dropdown-active")
    iconDropdown.classList.toggle("fa-angle-down")
    iconDropdown.classList.toggle("fa-angle-up")
})

listItem.forEach((item, index)=>{

    item.addEventListener(("click"), ()=>{
        dropdownList.classList.remove("dropdown-active")
        titleAction.textContent = listTitle[index].textContent
        iconDropdown.classList.toggle("fa-angle-down")
        iconDropdown.classList.toggle("fa-angle-up")
        // console.log(listTitle[index].textContent)
    })
})