const seePassword = document.querySelector(".toggle")

seePassword.addEventListener("click", (e)=>{
    const inputPass = e.target.previousElementSibling
    if(inputPass.getAttribute("type") === "password")
    {
        inputPass.setAttribute("type", "text")
    }
    else
    {
        inputPass.setAttribute("type", "password")
    }
})