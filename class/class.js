class Person{
    constructor(name){
        this.name = name
    }

    getName(){
        return this.name
    }
    setNam(newName){
        this.name = newName
    }
}

const duy = new Person("Hoàng Duy")
duy.setNam("Em Duy")
console.log(duy.getName())

