const nextBtn = document.querySelector(".slider-right")
const preBtn = document.querySelector(".slider-left")
const listItem = document.querySelectorAll(".slider-item")
const dotItem = document.querySelectorAll(".slider-dot-item")
function activeDot(i) {
    dotItem.forEach((item)=>{
        item.classList.remove("is-active")
    })
    dotItem[i].classList.add("is-active")
}
let i = 0
activeDot(i)
let zIndex = 1;
listItem[i].style = `left: 0; z-index: ${++zIndex}; `
listItem[4].style = `left: -100%; z-index: ${++zIndex}`
listItem[i+1].style = `left: 100%; z-index: ${++zIndex}`



function sliderIndex(index) {
    listItem[index].style = `left: 0; z-index: ${++zIndex}; transition: all 0.3s linear;`
}
dotItem.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        i = index;
        activeDot(i)
        sliderIndex(i)
    })
})

nextBtn.addEventListener("click", ()=>{
    if(i === 4)
    {
        i = 0
        listItem[i].style = `left: 0; z-index: ${++zIndex}; transition: all 0.3s linear;`
        listItem[4].style = `left: -100%; z-index: ${++zIndex}; transition: all 0.3s linear;`
        listItem[i+1].style = `left: 100%; z-index: ${++zIndex}`
    }
    else{
        i++
        if(i===4){
            listItem[i].style = `left: 0; z-index: ${++zIndex}; transition: all 0.3s linear;`
            listItem[i-1].style = `left: -100%; z-index: ${++zIndex}; transition: all 0.3s linear;`
            listItem[0].style = `left: 100%; z-index: ${++zIndex}`
        }
        else{
            listItem[i].style = `left: 0; z-index: ${++zIndex}; transition: all 0.3s linear;`
            listItem[i-1].style = `left: -100%; z-index: ${++zIndex}; transition: all 0.3s linear;`
            listItem[i+1].style = `left: 100%; z-index: ${++zIndex}`
        }
    }
    activeDot(i)
})
preBtn.addEventListener("click", ()=>{
    if(i === 0)
    {
        i = 4
        listItem[i].style = `left: 0; z-index: ${++zIndex}; transition: all 0.3s linear;`
        listItem[0].style = `left: 100%; z-index: ${++zIndex}; transition: all 0.3s linear;`
        listItem[i-1].style = `left: -100%; z-index: ${++zIndex}`
    }
    else{
        i--
        if(i===0){
            listItem[i].style = `left: 0; z-index: ${++zIndex}; transition: all 0.3s linear;`
            listItem[i+1].style = `left: 100%; z-index: ${++zIndex}; transition: all 0.3s linear;`
            listItem[4].style = `left: -100%; z-index: ${++zIndex}`
        }
        else{
            listItem[i].style = `left: 0; z-index: ${++zIndex}; transition: all 0.3s linear;`
            listItem[i+1].style = `left: 100%; z-index: ${++zIndex}; transition: all 0.3s linear;`
            listItem[i-1].style = `left: -100%; z-index: ${++zIndex}`
        }
    }
    activeDot(i)
})

let sliderTimer = setInterval(
    ()=>{
        if(i === 4)
    {
        i = 0
        listItem[i].style = `left: 0; z-index: ${++zIndex}; transition: all 0.3s linear;`
        listItem[4].style = `left: -100%; z-index: ${++zIndex}; transition: all 0.3s linear;`
        listItem[i+1].style = `left: 100%; z-index: ${++zIndex}`
    }
    else{
        i++
        if(i===4){
            listItem[i].style = `left: 0; z-index: ${++zIndex}; transition: all 0.3s linear;`
            listItem[i-1].style = `left: -100%; z-index: ${++zIndex}; transition: all 0.3s linear;`
            listItem[0].style = `left: 100%; z-index: ${++zIndex}`
        }
        else{
            listItem[i].style = `left: 0; z-index: ${++zIndex}; transition: all 0.3s linear;`
            listItem[i-1].style = `left: -100%; z-index: ${++zIndex}; transition: all 0.3s linear;`
            listItem[i+1].style = `left: 100%; z-index: ${++zIndex}`
        }
    }
    activeDot(i)
    }, 3000
)
listItem.forEach((item)=>{
    item.addEventListener("mousedown",()=>{
        item.classList.add("cusor-grabbing")
        item.classList.remove("cusor-grab")
        clearInterval(sliderTimer)
        item.addEventListener("mousemove", (e)=>{
            console.log(e.pageX)
        })
    })
    item.addEventListener("mouseup", ()=>{
        item.classList.add("cusor-grab")
        item.classList.remove("cusor-grabbing")
        sliderTimer = setInterval(
            ()=>{
                if(i === 4)
            {
                i = 0
                listItem[i].style = `left: 0; z-index: ${++zIndex}; transition: all 0.3s linear;`
                listItem[4].style = `left: -100%; z-index: ${++zIndex}; transition: all 0.3s linear;`
                listItem[i+1].style = `left: 100%; z-index: ${++zIndex}`
            }
            else{
                i++
                if(i===4){
                    listItem[i].style = `left: 0; z-index: ${++zIndex}; transition: all 0.3s linear;`
                    listItem[i-1].style = `left: -100%; z-index: ${++zIndex}; transition: all 0.3s linear;`
                    listItem[0].style = `left: 100%; z-index: ${++zIndex}`
                }
                else{
                    listItem[i].style = `left: 0; z-index: ${++zIndex}; transition: all 0.3s linear;`
                    listItem[i-1].style = `left: -100%; z-index: ${++zIndex}; transition: all 0.3s linear;`
                    listItem[i+1].style = `left: 100%; z-index: ${++zIndex}`
                }
            }
            activeDot(i)
            }, 3000
        )
        
    })
})