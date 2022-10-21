


const student = {
    name: "Em duy",
    age: 20,
}
const student2 = {
    name: "Cô bé mùa đông",
    age: 30
}
const studentMax = Object.assign(student,student2)
const studentMax2 = {...student, ...student2}

const x = JSON.stringify(student)
// name: "Nguyễn Hoàng Duy",
console.log(x)