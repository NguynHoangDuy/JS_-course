const input = document.querySelector(".dropdown-input")
input.addEventListener("keyup", (e)=>{
    const textInput = e.target.value.toLowerCase()
    const item = e.target.nextElementSibling.children
    const itemArr = [... item]
    itemArr.forEach((item) =>{
        const text = item.innerText
        const index = text.toLowerCase().indexOf(textInput)
        if(index >= 0 && text.toLowerCase().startsWith(textInput.charAt(0)) )
            {
                item.innerHTML = `<span class="highlight">${text.slice(index, index +textInput.length)}</span>${text.slice(index + textInput.length)}`
            }
            
    })
})