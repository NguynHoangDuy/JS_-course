const input = document.querySelector(".todoList-input")
const content = document.querySelector(".todoList-content")
const btnAdd = document.querySelector(".todoList-btn--add")
let todoList = []
if(todoList.length === 0)
{
    if(JSON.parse(localStorage.getItem("List")))
    todoList = [... JSON.parse(localStorage.getItem("List"))]
}
else{
    todoList = []
}
btnAdd.addEventListener("click", ()=>{
    todoList.push(input.value)
    addToDo(input.value)
    localStorage.setItem("List", JSON.stringify(todoList))
    input.value = ""
})
function addToDo(title = "")
{
    const template = `<div class="todoList-item">
        <p class="todoList-desc">${title}</p>
        <button class="todoList-btn todoList-btn-remove">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/minus.png"/>
        </button>
        </div>`
        content.insertAdjacentHTML("beforeend",template)

        const btnRemove = document.querySelectorAll(".todoList-btn-remove")
        console.log(btnRemove)
        if(btnRemove !== null)
        {
            btnRemove.forEach((item, index) =>{
                item.addEventListener("click", ()=>{

                    item.parentNode.parentNode.removeChild(item.parentElement)
                    todoList.splice(index,index+1)
                    localStorage.setItem("List", JSON.stringify(todoList))
                    })
                })
        }  
}
if(todoList.length !== 0)
{
    todoList.forEach((item) =>{
        addToDo(item)
    })
}

