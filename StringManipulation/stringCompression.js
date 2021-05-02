function stringCompression(str) {
    if (str.length === 0) {
        console.log('Please enter valid string.');
        return;
    }
    var output = '';
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        count++;
        if (str[i] !== str[i + 1]) {
            count === 1 ? output += str[i] : output += str[i] + count;
            count = 0;
        }
    }
    return output
}

console.log(stringCompression('abaabbbc'))


const compose = (fns) => (x,y) =>  fns.reduceRight((acc, curr) => curr(acc),x,y)

const fn = compose([(x) => x - 8,x => x ** 2,(x, y) => (y > 0 ? x + 3 : x - 3)]);fn(1,2)

let str = 'abc abc'let arr = str.split('')arr.reduceRight((acc,curr)=>acc + curr)