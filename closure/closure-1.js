
// Outer function
function outer() {
    let arr = [];
    let i;
    for (i = 0; i < 4; i++) {
        // storing anonymous function
        arr[i] = function () { return i; }
    }
 
    // returning the array.
    return arr;
}
 
let get_arr = outer();
 
display(get_arr[0]());
display(get_arr[1]());
display(get_arr[2]());
display(get_arr[3]());



