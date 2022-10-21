

const birthday = new Date(2001, 10, 29)

console.log(new Date(2001, 10, 29))

console.log(birthday.getDate())
console.log(birthday.getTime())

//input: Thu Nov 29 2001 00:00:00 GMT+0700 (Giờ Đông Dương)
const now = new Date("Thu Nov 29 2001 00:00:00 GMT+0700 (Giờ Đông Dương)")
const myDate = now.getDate()
const myMonth = now.getMonth() + 1;
const myYear = now.getFullYear()

const prefixMonth = myMonth >= 10? "" : "0"
const prefixDate = myDate >= 10? "" : "0"

console.log(`${prefixDate}${myDate}/${prefixMonth}${myMonth}/${myYear}`)