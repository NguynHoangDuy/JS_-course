const completeArr = [ [1,2,3], [3,4,5], [[2,3], [2,3,5]]]

// console.log(completeArr.flat(Infinity))

// function flatArr(arr, deep) {
//     let result = deep > 0 ?arr.reduce((a,value)=> a.concat(Array.isArray(value)? flatArr(value, deep-1): value),[]) : arr.slice();
//     return result;
// }

// console.log(flatArr(completeArr, Infinity))


function GiaiThua(n) {
    let gt = n === 1? 1: GiaiThua(n-1)*n
    return gt;

}


console.log(GiaiThua(3))


//BOM

console.log(location)

setTimeout(() => {
    location.href = "https://vlog-duy-mini.vercel.app/"
}, 1000);