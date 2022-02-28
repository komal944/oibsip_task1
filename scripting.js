// this function clear all the values
function clearScreen() {
    document.getElementById("result").value ="";
}

// this function display values
function display(value) {
    document.getElementById("result").value += value;
}
// this function evaluates the expression and returns the  result
function calculate() {
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}
