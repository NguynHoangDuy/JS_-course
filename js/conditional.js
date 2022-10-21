//Điều kiện

// if (condition)
// {
//     Your code here
// }

const isRich = false;
const myMoney = 100000
if(isRich)
{
    console.log("T đi mua xe nha")
}
else if(myMoney < 100){
    console.log("T không có giàu :(")
}
else {
    console.log("Nhưng t có tiền mua xe :))")
}

//prompt, confirm, alert

// alert("Your website have been hacked")

// let yourAge = prompt("Vui lòng nhập vào số tuổi của bạn")
// while(isNaN(yourAge)){
//     alert("Nhập sai rồi")
//     yourAge = prompt("Vui lòng nhập lại số tuổi của bạn")
// }
// if(yourAge >= 18)
// {
//     const isAge = confirm("Đây có phải tuổi thật của mày không")
//     if(isAge)
//     {
//         console.log(yourAge)
//     }
//     else{
//         alert("Mày nói xạo")
//     }
// }
// else{
//     alert("Thì ra mày chưa đủ tuổi")
// }

//Bài 2: cho 3 số a, b, c tìm số lớn nhất

let a , b, c;

a = prompt("Nhập số a:")
b = prompt("Nhập số b:")
c = prompt("Nhập số c:")

let max = a;

if(max < b)
    max = b
if(max < c)
    max = c
alert(`số lớn nhất là : ${c}`)







