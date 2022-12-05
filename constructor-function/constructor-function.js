// Declaretion, new, this, method, caution
let student = {
    firstName: "Hoàng Duy",
    lastName: "Nguyễn",
    fullname: function(){
        console.log(`${this.lastName} ${this.firstName}`)
    }
}

//constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
}


let student1= new Student("Con mèo", 12)
console.log(student1)


//prototype

Student.prototype.getName = function() {
    console.log(`Hello ${this.name}`)
}

student1.getName()

//bind


const btn = document.querySelector(".btn")

btn.addEventListener("click", student.fullname.bind(student))

//partical function
function log(level, time, message) {
    console.log(`${level} ${time} ${message}`)
}

const logErrToday = log.bind(null, "Errol", "Today")
logErrToday("Com mèo")