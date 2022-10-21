window.addEventListener("load", ()=>{
    const playBtn = document.querySelector(".player-play")
    const video = document.querySelector("#video")
    const btnPre = document.querySelector(".player-prev")
    const btnNext = document.querySelector(".player-next")
    let minuteVideo 
    let secondVideo
    let minutePlay;
    let secondPlay;
    
    function calMinuteSong(currentTime)
    {
        minuteVideo = Math.floor(Math.abs(currentTime - video.duration)/60)
    }
    function calSecondSong(currentTime, minute)
    {  
        secondVideo = Math.floor((Math.abs((currentTime - video.duration)) - minute*60))
    }
    function calMinutePlay(currentTime)
    {
        minutePlay = Math.floor(Math.abs(currentTime)/60)
    }
    function calSecondPlay(currentTime, minute)
    {  
        secondPlay = Math.floor((Math.abs((currentTime)) - minute*60))
    }
    function videoPlay(){
        let videoPlayMusic = setInterval(()=>{
            calMinutePlay(video.currentTime)
            calSecondPlay(video.currentTime, minutePlay)
            calMinuteSong(video.currentTime)
            calSecondSong(video.currentTime, minuteVideo)
            setTimeDuration(minutePlay, secondPlay)

            if(minuteVideo === 0 && secondVideo === 0)
            {
                playBtn.classList.add("fa-play")
                playBtn.classList.remove("fa-pause")
                playing = false;
            }
            progress.value = Math.round(((minutePlay*60)+secondPlay)*100/ video.duration)
            progress.style.background = `linear-gradient(to right, pink 0%, pink ${progress.value}%, slategray ${progress.value}%, slategray 100%)`
            setTimeRemain(minuteVideo, secondVideo)
        }, 1000)

        
    }
    calMinuteSong(video.currentTime)
    calSecondSong(video.currentTime, minuteVideo)
    const timeDuration = document.querySelector(".player-duration")
    const timeRemain = document.querySelector(".player-remaining")

    
    const progress = document.querySelector('.bar');
    progress.addEventListener('change', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, pink 0%, pink ${value}%, slategray ${value}%, slategray 100%)`
    })
    progress.addEventListener("input", (e)=>{
        video.currentTime = e.currentTarget.value * video.duration / 100 
    })

    function setTimeRemain(minute, second) {
        let secondStr = `0${second}`.slice(-2);
        timeRemain.textContent = `${minute}:${secondStr}`
    }
    function setTimeDuration(minute, second) {
        let secondStr = `0${second}`.slice(-2);
        timeDuration.textContent = `${minute}:${secondStr}`
    }
    setTimeRemain(minuteVideo, secondVideo)
    const playImg = document.querySelector(".player-img")
    let playing= false;
    playBtn.addEventListener("click", ()=>{
        if(playing)
        {
            video.pause();
            playBtn.classList.add("fa-play")
            playBtn.classList.remove("fa-pause")
            playing = false;
        }
        else {
            video.play();
            playing = true;
            playBtn.classList.add("fa-pause")
            playBtn.classList.remove("fa-play")
            videoPlay();
        }
    })

    progress.addEventListener("input", (e)=>{
        video.currentTime = e.currentTarget.value * video.duration / 100 
    })

})