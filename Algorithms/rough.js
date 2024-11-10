var arr = [3, 2, 1, 4, 6, 5, 8, 7, 9];
var p = 0;
var r = arr.length - 1;
var q = Math.floor((p + r) / 2);
var L = Array(q - p + 1).fill(0); // Left side of the split
var R = Array(r - q).fill(0); // Right side of the split
// Filling the L array with the left half of arr
for (var i = 0; i < L.length; i++) {
    L[i] = arr[p + i];
}
// Filling the R array with the right half of arr
for (var j = 0; j < R.length; j++) {
    R[j] = arr[q + 1 + j];
}
console.log(L, R);
