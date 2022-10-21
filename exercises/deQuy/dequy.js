const completeArr = [ [1,2,3], [3,4,5], [[2,3], [2,3,5]]]

// console.log(completeArr.flat(Infinity))

function flatArr(arr, deep) {
    let result = deep > 0 ?arr.reduce((a,value)=> a.concat(Array.isArray(value)? flatArr(value, deep-1): value),[]) : arr.slice();
    return result;
}

console.log(flatArr(completeArr, Infinity))