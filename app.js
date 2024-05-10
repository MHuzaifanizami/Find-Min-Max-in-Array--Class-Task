
////// find max number in array using loop/////

var arr = [150, 120, 145, 55, 67, 88, 95, 180]
var max = 0

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(max)

////// find min number in array using loop/////

var arr = [150, 120, 145, 55, 67, 88, 95, 180]
var min = 0

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < max) {
        min = arr[i]
    }
}
console.log(min)