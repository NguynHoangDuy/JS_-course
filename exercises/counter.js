

const btnPlus = document.querySelector(".counter-plus")
const btnMinus = document.querySelector(".counter-minus")
const counterNumber = document.querySelector(".counter-number")
console.log(counterNumber.textContent)


btnPlus.addEventListener("click", ()=>{
    if(Number(counterNumber.textContent) === 100)
    counterNumber.textContent = 0
    else counterNumber.textContent = Number(counterNumber.textContent) + 1;
})
btnMinus.addEventListener("click", ()=>{
    if(Number(counterNumber.textContent) === 0)
    counterNumber.textContent = 0
    else
    counterNumber.textContent = Number(counterNumber.textContent) - 1;
})

btnPlus.addEventListener("mousedown", ()=>{
    const timer = setInterval(() => {
        counterNumber.textContent = Number(counterNumber.textContent) + 1;
        if(Number(counterNumber.textContent) === 101)
        {
            counterNumber.textContent = 0
        }
    }, 100);
    btnPlus.addEventListener("mouseup", ()=>{
        clearInterval(timer)
    })
})

