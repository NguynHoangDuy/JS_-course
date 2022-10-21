//Bài 1: Viết chương trình nhập năm sinh và in ra số tuổi

    
function getAge(year = 0) {
    if(typeof(year) !== "number") return 0
    const dateNow = new Date();
    return dateNow.getFullYear() - year
}

console.log(getAge(2001))

//Bài 2: Viết chương trình đếm ngược thời gian theo từng giây (countDown) dựa vào thời gian đầu vào.
//Ví dụ thời gian làm bài là 30 phút nếu chạy về không thì thông báo hết thời gian.

// function countDown(time = 0.1) {
//     let second = time * 60;
//     let counter = 0;
//     const timer = setInterval(function(){
//         counter = counter + 1
//         console.log(counter)
//         if( counter === second){
//             clearInterval(timer);
//             console.log("Hết thời gian rồi")
//         }
//     },1000)
// }

// countDown()

//Bài 3: Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu 
//vào so với hiện tại, ví dụ bạn đang chat với bạn A sau đó bạn A offline và sau đó thì hiển thị
//bạn A vừa online 3 phút trước


//1 năm 365
//1 ngày 24h

//1h 60 phút

//1 phút 60s

// 1 năm = 365 * 24 * 60 * 60
//1 tháng = 31 * 24 * 60 * 60
// 1 tuần = 7 * 24 * 60 * 60
// 1 ngày = 1 * 24 * 60 * 60
// 1 giờ = 1 * 60 * 60;
// 1 phút = 1 * 60
function timeSince(time = "Sat Jul 01 2022 14:53:14 GMT+0700 (Giờ Đông Dương)") {
    const currentTime = new Date();
    const time2 = new Date(time)
    const second = Math.floor((currentTime.getTime() - time2.getTime())/1000)
    let timer = second / (365 * 24 * 60 * 60)
    if(timer > 1)
        console.log(`${Math.floor(timer)} năm trước`)
    else {
        timer = second / (31 * 24 * 60 * 60)
        if(timer > 1)
            console.log(`${Math.floor(timer)} tháng trước`)
            else{
                timer = second / (7 * 24 * 60 * 60)
                if(timer > 1)
                    console.log(`${Math.floor(timer)} tuần trước`)
                else{
                    timer = second / (1 * 24 * 60 * 60)
                    if(timer > 1)
                        console.log(`${Math.floor(timer)} ngày trước`)
                    else{
                        timer = second / (1 * 60 * 60)
                        if(timer > 1)
                            console.log(`${Math.floor(timer)} giờ trước`)
                        else{
                            timer = second / (1 * 60)
                            if(timer > 1)
                                console.log(`${Math.floor(timer)} phút trước`)
                        }
                    }
                }
            }
    }

} 

timeSince();

