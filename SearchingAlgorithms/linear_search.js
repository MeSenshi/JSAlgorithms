function linearSearch(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

// function linearSearch2(arr, val) {
//     if (!arr.length) return -1;
//     return arr.indexOf(val)
// }

// console.log(linearSearch2([34,51,1,2,3,45,56,687], 100))

linearSearch([34,51,1,2,3,45,56,687], 100)