

const array = new Array("Duy","Nguyễn","Hoàng")

console.log(`${array[0]} ${array[1]} ${array[2]}`)

console.log(array.length)

array.reverse();
console.log(array.join(" "))

array.push("Lan")

array.unshift("FrontEnd")
console.log(array)

array.shift();
array.pop();
console.log(array)


//slice tạo ra mảng mới từ mảng đầu

const animal = ["tiger", "lion", "elephant"]

const animal2 = animal.slice()
console.log(animal2)

const animal3 = animal2
console.log(animal3)

//splice xóa phần tử trong mảng hoặc thay thế nó

const pet = ["cat", "dog", "brid", "snake"]
console.log(pet)
const pet3 = pet.splice(2,1)
console.log(pet)
console.log(pet3)
const pet2 = pet.splice(2);
console.log(pet2)


//sort


const random = [ 2, 8 , 22, 1, 20 , 55, 23 ,42]

console.log(random.sort((a,b) => a > b ?  1 : -1))

//map duyệt qua từ phần tử trong mảng và trả về một mảng mới

const listNumber = [1,2,3,4,5,6]
const listNumber2 = listNumber.map(e => e*2);
console.log(listNumber2)
listNumber.forEach(e => console.log(e*3))


