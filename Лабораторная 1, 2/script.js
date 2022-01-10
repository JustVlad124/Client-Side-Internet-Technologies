const solveButton = document.getElementById('SButton');

function quad(a, b, c){
    if (a == 0) return alert("Ошибка а = 0");
    var D = b*b-4*a*c;
    var x1 = 0, x2 = 0;
    if (D > 0)
    {
        x1 = (-b+Math.sqrt(D))/(2*a);
        x2 = (-b-Math.sqrt(D))/(2*a);
        return "Коэффициенты: а = "+a+", b = "+b+", c = "+c+"\nКорни уравнения: X1 = "+ x1 + ", X2 = "+ x2 + "\nДискриминант = " +D;
    } 
    else if (D == 0)
    {
        x1 = -b/(2*a);
        return "Коэффициенты: а = "+a+", b = "+b+", c = "+c+"\nКорни уравнения: X1 = "+ x1 + "\nДискриминант = " +D;
    }
    else if (D < 0)
    {
        return "Корней нет! D = " + D;
    }
}

function solveQuad() {
    var a = document.getElementById('A').value;
    var b = document.getElementById('B').value;
    var c = document.getElementById('C').value;
    var result = quad(a, b, c);
    document.getElementById("result").textContent = result;
}

solveButton.addEventListener('click', solveQuad);