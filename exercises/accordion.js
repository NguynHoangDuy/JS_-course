const headAccordion = document.querySelectorAll(".accordion-head")
const accordionIcon = document.querySelectorAll(".accordion-icon")
const accordionContent = document.querySelectorAll(".accordion-content")
headAccordion.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        // const content = item.nextElementSibling
        // accordionContent[index].style.height = `${content.scrollHeight}px`
        accordionContent[index].classList.toggle("accordion-active")
        // if(!accordionContent[index].classList.contains("accordion-active"))
        // {
        //     accordionContent[index].style.height = `0px`
        // }
            
        
        
    
        accordionIcon[index].classList.toggle("fa-angle-down")
        accordionIcon[index].classList.toggle("fa-angle-up")
        
    })
})
console.log(headAccordion)