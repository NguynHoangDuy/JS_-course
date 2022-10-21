//1. Viết một func kiểm tra value có phải object không?

//Viết func 

function objectToArray(value) {
    let result = []
    for( let i in value)
        result.push([i, value[i]])
    return result
}
const value = {
    a: 1,
    b: 2
}
console.log(objectToArray(value))


//Bài 3:

function without(object, ...key) {
    console.log(key)

    key.forEach(key => {
        delete object[key]
    })

    return object
}

console.log(without(value, "a"))