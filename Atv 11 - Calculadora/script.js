function button(value) {
    document.getElementById('display').value += value;
}

function LimparNumeros() {
    document.getElementById('display').value = '';
}

function calcular() {
    let expression = document.getElementById('display').value;
    let result;

    if (isValidExpression(expression)) {
        result = eval(expression);
    } else {
        result = 'Error';
    }

    document.getElementById('display').value = result;
}

function isValidExpression(expression) {
    return /^[\d\.\+\-\*\/]*$/.test(expression);
}