var array = [1, [2, 3, [4, 5]]]

function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

function flatten(arr) {
    let result = []
    arr.map(item =>{
        if (Array.isArray(item)) {
            result = result.concat(flatten(item))
        }else{
            result.push(item)
        }
    })
    return result
}


console.log(flatten(array));