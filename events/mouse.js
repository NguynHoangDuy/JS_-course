
const btn = document.querySelector(".btn")

//mousemove, mouseover, mouseenter, mouseleave

btn.addEventListener("mouseover", ()=>{
    console.log("HOàng Duy")
})

//.pageX pageY clientX clientY

// document.addEventListener("mousemove", (e)=>{
//     console.log(`pageX: ${e.pageX}`)
//     console.log(`clientX: ${e.clientX}`)
//     console.log(`pageY: ${e.pageY}`)
//     console.log(`clientY: ${e.clientY}`)
// })

//pageY: Lấy tọa độ theo document
//clientY:Lấy tọa độ theo viewport