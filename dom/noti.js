

function addNoti(title = `Hello mấy cưng`) {
    document.body.insertAdjacentHTML("afterbegin", 
    `<div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-img">
    <div class="noti-content">
        <h2 class="noti-title">
            ${title}
        </h2>
        <p class="noti-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam quae officia cumque qui praesentium labore.
        </p>
    </div>
    </div>`)
}
const titleList = ['Hello Hoàng Duy' , "Hello em Duy", "Xin Chào Duy", "Cô bé mùa đông", "Con mèo heo"]
const timer = setInterval(()=>{
    item = document.querySelector(".noti")
    if(item)
        item.parentElement.removeChild(item)
    let title = titleList[Math.floor(Math.random() * titleList.length)]
    addNoti(title)
}, 4000)
