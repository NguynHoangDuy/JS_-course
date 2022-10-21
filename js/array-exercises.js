//Bài 1: Đảo ngược một chuỗi. Ví dụ: "My name is Duy" -> "Duy is name My"

function reverseString(str = "My name is Duy") {
    if (str === "")
        return null
    return str.split(" ").reverse().join(" ")
}
console.log(reverseString())

//Bài 2: Đạo ngược một chuỗi bao gồm các ký tự

function reverseWord(str = "My name is Duy") {
    if (str === "")
        return null
    return str.split(" ").map(e => e.split("").reverse().join("")).reverse().join(" ")
}
console.log(reverseWord())

//Bài 3: Capitalize

function capotalize(string = "my naMe is duy") {
    if (string === "")
        return null
    return string.split(" ").map(e => e.split("").map((f, i) => i === 0 ? f.toUpperCase() : f.toLowerCase()).join("")).join(" ")
}

console.log(capotalize())


//Sao chép mảng