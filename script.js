function decimalToBinary(num) {
    return num.toString(2);
}

const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));