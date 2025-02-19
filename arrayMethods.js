function mySlice(arr, start = 0, end = arr.length) {
    let newArray = [];

    if (start < 0) {
        start = Math.max(arr.length + start, 0);
    }
    if (end < 0) {
        end = Math.max(arr.length + end, 0);
    }

    end = Math.min(end, arr.length);

    for (let i = start; i < end; i++) {
        newArray.push(arr[i]);
    }

    return newArray;
}

function myIndexOf(arr, item, from) {
    if (from < 0) {
        from = Math.max(arr.length + from, 0);
    }
    if (from >= arr.length) {
        return -1;
    }
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}
function myIncludes(arr, item, from) {
    if (from < 0) {
        from = Math.max(arr.length + from, 0);
    }
    if (from >= arr.length) {
        return false;
    }
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(mySlice(arr));

console.log(myIndexOf(arr, 5, 3));

console.log(myIncludes(arr, 8, -1));