
function getValue(num) {
    const display = document.getElementById('display');
    display.value += num;
}

function deleteItem() {
    display.value = display.value.slice(0, -1);
}
function reset() {
    display.value = ""
}
function cube() {
    const num = display.value;
    const cube = num * num * num;
    display.value = cube;
}

function square() {
    const num = display.value;
    const square = num * num;
    display.value = square;
}

function calculate() {
    display.value = eval(display.value);
}