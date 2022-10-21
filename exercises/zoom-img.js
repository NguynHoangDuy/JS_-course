window.addEventListener("DOMContentLoaded", ()=>{
    const img = document.querySelector(".img")
    const imgCover = document.querySelector(".img-cover")
    const imgWrap = document.querySelector(".img-wrapper")
    let wrapWidth = imgWrap.offsetWidth
    let wrapHeight = imgWrap.offsetHeight
    imgCover.addEventListener("mousemove", (e)=>{
        const px = e.pageX
        const py = e.pageY
        console.log(px, py)
        img.style = "width: auto; height: auto; max-height: unset"
        let imgWidth = img.offsetWidth
        let imgHeight = img.offsetHeight
        let spaceX = (imgWidth /2 -wrapWidth)*2
        let spaceY = (imgHeight /2 -wrapHeight)*2
        imgWidth = imgWidth + spaceX
        imgHeight = imgHeight + spaceY
        let ratioX = imgWidth/wrapWidth/2
        let ratioY = imgHeight/wrapHeight/2
        let x = (px - imgWrap.offsetLeft) * ratioX
        let y =(py -  imgWrap.offsetTop) * ratioY
        img.style = `left: ${-(x)}px; top: ${-y}px; width: auto; height: auto; max-height: unset; transform: none`
    })

    imgCover.addEventListener("mouseleave", ()=>{
        img.style = ``
    })
})

