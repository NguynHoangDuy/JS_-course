//Bài 1: Viết hàm so sánh 2 số a, b. Tìm ra số lớn hơn.

function compare(a = 0, b = 0) {
    if(isNaN(a) || isNaN(b))
    return "Không phải số"
    return Math.max(a,b)
}


console.log(compare("2", "3"))


//Bài 2: In hoa chữ cái đầu trong chữ ví dụ tuan -> Tuan, nam -> Nam

function upCase(name = "") {
    if(name.length === 0)
    return "Bạn chưa nhập kìa má"
    let newName = name.toLowerCase();

    name = name.charAt(0).toUpperCase();

    return name + newName.slice(1)
}

console.log(upCase("nGUYEN"))

//Bài 3: Viết hàm có sử dụng callBack (function là parameter của function khác) in ra kết quả của hàm compare đã viết ở trên

function useCallback(a,b, callback) {
    let max = compare(a,b)
    callback(max)
}
function printMax(number) {
    console.log(`Max number is ${number}`)
}

useCallback(5,10,printMax)

const arrowFun = () => "hoangduy"
console.log(arrowFun())


const fun = function(){
    return "Hong duy"
}

console.log(fun())