const listName = document.querySelectorAll(".tab-name--item")
const listDesc = document.querySelectorAll(".tab-desc")
console.log(listName)

listName.forEach((value, index) => {
    value.addEventListener("click", ()=>{
        value.classList.add("tab-active")
        for(let i = 0; i < listName.length; i++)
        {
            if(i !== index)
            listName[i].classList.remove("tab-active")
        }
        for(let j = 0; j < listDesc.length; j++)
        {
            if(j !== index)
            listDesc[j].classList.remove("tab-text-active")
            else 
            listDesc[j].classList.add("tab-text-active")
        }
    })
})