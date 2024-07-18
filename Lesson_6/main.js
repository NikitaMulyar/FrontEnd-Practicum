// const languages = ["Java", "TypeScript", "C#", "JavaScript", "Julia"]
//
// const startswithJ = languages.filter(function (ch) {
//   return ch[0] === "J"
// });
//
// console.log(startswithJ);
//
// const nums = [15, 0, 4]
// nums.sort()
// console.log(nums)
//
// function isEmpty(obj) {
//     if (!obj) {
//         return true;
//     }
//     let vals = Object.values(obj);
//     for (let i = 0; i < vals.length; i++) {
//         if (vals[i] !== undefined) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(isEmpty({a: undefined}));


function linear (array) {
    if (array.length === 0)
        return array;
    if (typeof array[0] === "object")
        return linear(array[0]).concat(linear(array.slice(1)));
    return [array[0]].concat(linear(array.slice(1)));
}

let arr = [1, [2, [3, 4, 5], 6], 7, 8, []];
console.log(linear(arr));


// function reverse