const date = new Date("Mon Sep 12 2022 09:56:18")
const day = 1*24*60*60
const hour = 1*60*60
const minute = 1*60
const days = document.querySelector(".countdown-number-day")
const hours = document.querySelector(".countdown-number-hour")
const minutes = document.querySelector(".countdown-number-minute")
const second = document.querySelector(".countdown-number-second")

const timeOut = setInterval(()=>{
    const now = new Date()
    let timer = (date - now)/1000
    
    if(timer <=0)
    {
        clearInterval(timeOut)
    }
    else{
        days.textContent =  `0${Math.floor(timer / day)}`.slice(-2)
        timer = timer % day
        hours.textContent =  `0${Math.floor(timer / hour)}`.slice(-2)
        timer = timer % hour
        minutes.textContent = `0${Math.floor(timer / minute)}`.slice(-2)
        timer = timer % minute
        second.textContent =`0${Math.floor(timer)}`.slice(-2)
    }
}, 1000)