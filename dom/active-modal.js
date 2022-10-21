
const body = document.body
const model = document.createElement("div")
const modelContent = document.createElement("div")
body.appendChild(model)
model.classList.add("model")
model.appendChild(modelContent)
modelContent.classList.add("model-content")
const modelClose = document.createElement("i")
modelClose.className= "fa fa-times model-close"
modelContent.appendChild(modelClose)
const modelDesc = document.createElement("div")
modelDesc.classList.add("model-desc")
modelDesc.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, perferendis voluptate autem ut vitae pariatur. Voluptas dolore consequatur eos omnis fugiat, debitis, expedita incidunt quae nihil molestias optio laborum voluptatem."
modelContent.appendChild(modelDesc)

const modelAction = document.createElement("div")
modelAction.classList.add("model-action")
modelContent.appendChild(modelAction)
const modelConfirm = document.createElement("button")
modelConfirm.textContent = "Confirm"
modelConfirm.className = "model-confirm model-submit"
modelAction.appendChild(modelConfirm)
const modelCancel = document.createElement("button")
modelCancel.textContent = "Cancel"
modelCancel.classList.add("model-cancel")
modelAction.appendChild(modelCancel)
console.log(body)






const btnConfirm = document.querySelector(".model-confirm")
const btnCancel = document.querySelector(".model-cancel")

btnConfirm.addEventListener("click", 
    () =>{
    if(!btnConfirm.classList.contains(".model-submit"))
    {
        btnConfirm.classList.add("model-submit")
        btnCancel.classList.remove("model-submit")
    }
})

btnCancel.addEventListener("click", 
    () =>{
    if(!btnCancel.classList.contains(".model-submit"))
    {
        btnCancel.classList.add("model-submit")
        btnConfirm.classList.remove("model-submit")
    }
})
const modelEvent = document.querySelector(".model")
const btnClose = document.querySelector(".model-close")
const btnOpen = document.querySelector(".model-open")
btnClose.addEventListener("click", ()=>{
    modelEvent.classList.remove("model-isShow")
})
btnOpen.addEventListener("click", ()=>{
    modelEvent.classList.add("model-isShow")
})