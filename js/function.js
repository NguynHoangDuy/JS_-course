

function sum(a = 0, b = 0) {
    return a+b
}
function average(a,b,fn)
{
    const total = fn(a+b)
    return total/2
}


console.log(average(5,6,sum))
sum(5,6)
// console.log(sum(5,6))


// const logName = function(){
//     console.log("Nguyễn Hoàng Duy")
// }
// logName()

function message(){
    console.log("Chào mừng bạn:")
    return function(){
        console.log("Hoàng Duy")
    }
}

const hello = message()
hello()
// hello()