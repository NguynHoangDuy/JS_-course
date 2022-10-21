//regular-expression

//2 cách khai báo với regex
const re1 = /hello/

const re2 = new RegExp("hello")

// console.log(re1.test(" hello hoàng duy"))


//anchor ^Bắt đầu Kết thúc$
// console.log(/hello$/.test("duy hello"))


//3 Ranges []

//[a-z][A-Z][0-9]

//4 Meta characters

// \d: khớp với số nó sẽ tương đương với [0-9]
// \D: ngược lại với \d tương đương với [^0-9]
// \w: sẽ khớp với các ký tự và dấu gạch dưới và số, nó sẽ tương đương [a-zA-Z0-9_]
// \W: ngược lại với \w sẽ tương đương [^a-zA-Z0-9_]
// \s: khớp với lại ký tượng khoảng trắng space, tab, newLine
// \S: ngược lại với \s 
// \n: xuống hàng newLine
// \t: khớp với lại tabCharacter
// .: khớp với tất cả mọi thứ trừ newLine
// [^]: khớp với tất cả mọi thứ kể cả newLine

//5 quantifier {n} {n,m} + ? *

const str1 = "Nguyen Hoang Duy2911"
console.log(/(\w+)(\d{3})/.test(123))
// console.log(str1.match(/\d+/)[0])

//flag
//g: global
//i: case insensitive
//m: multipe lines

//group ()

const input = document.querySelector(".input")
const valied = document.querySelector(".valied")
const invalied = document.querySelector(".invalied")
input.addEventListener("input", (e)=>{
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!e.target.value)
    {
        valied.classList.remove("true")
        invalied.classList.remove("true")
    }
    else{
        if(re.test(e.target.value))
        {
            valied.classList.add("true")
            invalied.classList.remove("true")
        }
        else{
            valied.classList.remove("true")
            invalied.classList.add("true")
        }
    }
        

})