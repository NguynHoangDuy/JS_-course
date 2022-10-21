

const array1 = ["1", "2", "3", "4"]
console.log(array1)

let array2 = []

for (let i = 0; i < array1.length; i++)
    array2[i] = array1[i];

console.log(array2)


function daoTu(str = "") {
    let Arr = str.split("")
    let newArr = []
    let j = 0;
    for(let i = Arr.length - 1 ; i >= 0; i --)
    {
        newArr[j++] = Arr[i];
    }

    return newArr.join("")
}

console.log(daoTu("i love"))