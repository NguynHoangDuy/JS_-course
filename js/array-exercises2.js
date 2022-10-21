// Cho 1 mảng gồm nhiều giá trị [1,1000, false, null, "duy", "", undefined, "javascript", [1,2,3]]. Viết chương trình loại bỏ các giá trị falsy.


let array = [1,1000, false, null, "duy", "", undefined, "javascript", [1,2,3]]
let newArr = [... array]
for(let i = 0; i < newArr.length ; i++)
{
    if(Boolean(newArr[i])=== false)
    {
        newArr.splice(i,1);
        i--;
    }
        
}

console.log(newArr);

// array[i] == true)


function reverseNumber(num = 0) {

    let abs = Math.sign(num);

    num = Math.abs(num)
    let res = 0;
    while( num > 0 )
    {
        res = res*10 + num%10
        num = Math.floor(num / 10)
    }

    return res*abs
}
console.log(reverseNumber(-2091234))

//4. Viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 cho tới số nguyên đó rồi kiểm tra chia hết cho 2 thì in ra Fizz, nếu chia hết cho 3 thi in ra "buzz"

function fizzBuzz(num = 0) {
    for(let i = 1 ; i <= num; i++)
        if(i%2 === 0 && i%3 === 0)
            console.log("FizzBuzz")
        else if(i%2 === 0)
            console.log("Fizz")
            else if(i%3 === 0)
                console.log("Buzz")
}

fizzBuzz(15);


//
const arrayNum = [1,2,1,2,1,1,3,3,4,3,5,6,3,4,1,7,1,2]

const newArrNum = []

for(let i = 0; i < arrayNum.length; i++)
    if(!(newArrNum.includes(arrayNum[i])))
        newArrNum.push(arrayNum[i])

console.log(newArrNum)



const array4 = [1 , 2, 3, 4, 5, 6]
const newArr4 = []
const num = 2;
let i = 0
while(i < array4.length){
    newArr4.push(array4.slice(i, i + num))
    i+= num
}

console.log(newArr4)

