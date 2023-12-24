
// Outer function
function outer() {
    function create_Closure(val) {
        return function () {
            return val;
        }
    }
    let arr = [];
    let i;
    for (i = 0; i < 4; i++) {
        arr[i] = create_Closure(i);
    }
    return arr;
}

let get_arr = outer();
display(get_arr[0]());
display(get_arr[1]());
display(get_arr[2]());
display(get_arr[3]());