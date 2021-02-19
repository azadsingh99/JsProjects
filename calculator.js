add = document.getElementById("add");
add.addEventListener("click", () => {
    num1 = document.getElementById('number1').value;
    num2 = document.getElementById('number2').value;
    operator = document.getElementById('operation').value;
    if (operator == '+') {
        ans = Number(num1) + Number(num2);
        document.getElementById("answer").value = ans;
    } else if (operator == '-') {
        ans = Number(num1) - Number(num2);
        document.getElementById("answer").value = ans;
    } else if (operator == '*') {
        ans = Number(num1) * Number(num2);
        document.getElementById("answer").value = ans;
    } else if (operator == '/') {
        ans = Number(num1) / Number(num2);
        document.getElementById("answer").value = ans;
    } else if (operator == '%') {
        ans = Number(num1) % Number(num2);
        document.getElementById("answer").value = ans;
    } else {
        alert('Please Choose Proper Inputs')
    }
})