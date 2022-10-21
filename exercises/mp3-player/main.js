window.addEventListener("load", ()=>{
    const playBtn = document.querySelector(".player-play")
    const song = document.querySelector("#song")
    const listMusic = ["Anh-Se-Tot-Ma-Pham-Hong-Phuoc-Thuy-Chi.mp3", "Bai-Nay-Khong-De-Di-Dien-Anh-Tu-Atus.mp3", "Tinh-Yeu-Chap-Va-Mr-Siro.mp3"]
    let currentMusic;
    listMusic.forEach((item, index)=>{
        let src= `./files/${item}`
        if(src ===  song.getAttribute("src"))
            currentMusic = index
    })
    console.log(currentMusic)
    const btnPre = document.querySelector(".player-prev")
    const btnNext = document.querySelector(".player-next")
    let minuteSong 
    let secondSong
    let minutePlay;
    let secondPlay;
    function calMinuteSong(currentTime)
    {
        minuteSong = Math.floor(Math.abs(currentTime - song.duration)/60)
    }
    function calSecondSong(currentTime, minute)
    {  
        secondSong = Math.floor((Math.abs((currentTime - song.duration)) - minute*60))
    }
    function calMinutePlay(currentTime)
    {
        minutePlay = Math.floor(Math.abs(currentTime)/60)
    }
    function calSecondPlay(currentTime, minute)
    {  
        secondPlay = Math.floor((Math.abs((currentTime)) - minute*60))
    }
    function songPlay(){
    
        let songPlayMusic = setInterval(()=>{
            calMinutePlay(song.currentTime)
            calSecondPlay(song.currentTime, minutePlay)
            calMinuteSong(song.currentTime)
            calSecondSong(song.currentTime, minuteSong)
            setTimeDuration(minutePlay, secondPlay)
            if(minuteSong === 0 && secondSong === 0)
            {
                if(currentMusic === listMusic.length - 1)
                {
                    currentMusic = 0
                }
                else currentMusic++;
        
                song.setAttribute("src", `./files/${listMusic[currentMusic]}`)
                song.play();
                playing = true;
                playImg.classList.add("is-playing")
                playBtn.classList.add("fa-pause")
                playBtn.classList.remove("fa-play")
            }
                
            progress.value = Math.round(((minutePlay*60)+secondPlay)*100/ song.duration)
            progress.style.background = `linear-gradient(to right, pink 0%, pink ${progress.value}%, slategray ${progress.value}%, slategray 100%)`
            setTimeRemain(minuteSong, secondSong)
        }, 1000)

        
    }
    calMinuteSong(song.currentTime)
    calSecondSong(song.currentTime, minuteSong)
    // console.log(minuteSong, secondSong)
    const timeDuration = document.querySelector(".player-duration")
    const timeRemain = document.querySelector(".player-remaining")

    
    const progress = document.querySelector('.bar');
    progress.addEventListener('change', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, pink 0%, pink ${value}%, slategray ${value}%, slategray 100%)`
    })

    function setTimeRemain(minute, second) {
        let secondStr = `0${second}`.slice(-2);
        timeRemain.textContent = `${minute}:${secondStr}`
    }
    function setTimeDuration(minute, second) {
        let secondStr = `0${second}`.slice(-2);
        timeDuration.textContent = `${minute}:${secondStr}`
    }
    setTimeRemain(minuteSong, secondSong)
    const playImg = document.querySelector(".player-img")
    let playing= false;
    playBtn.addEventListener("click", ()=>{
        if(playing)
        {
            song.pause();
            playImg.classList.remove("is-playing")
            playBtn.classList.add("fa-play")
            playBtn.classList.remove("fa-pause")
            playing = false;
            // clearInterval(songPlayMusic)
        }
        else {
            song.play();
            playing = true;
            playImg.classList.add("is-playing")
            playBtn.classList.add("fa-pause")
            playBtn.classList.remove("fa-play")
            songPlay();
        }
    })

    progress.addEventListener("input", (e)=>{
        song.currentTime = e.currentTarget.value * song.duration / 100 
    })

    btnPre.addEventListener("click", ()=>{
        if(currentMusic === 0)
        {
            currentMusic = listMusic.length - 1
        }
        else currentMusic--;

        song.setAttribute("src", `./files/${listMusic[currentMusic]}`)
        song.play();
            playing = true;
            playImg.classList.add("is-playing")
            playBtn.classList.add("fa-pause")
            playBtn.classList.remove("fa-play")
            songPlay();
    })
    btnNext.addEventListener("click", ()=>{
        if(currentMusic === listMusic.length - 1)
        {
            currentMusic = 0
        }
        else currentMusic++;

        song.setAttribute("src", `./files/${listMusic[currentMusic]}`)
        song.play();
            playing = true;
            playImg.classList.add("is-playing")
            playBtn.classList.add("fa-pause")
            playBtn.classList.remove("fa-play")
    })
})