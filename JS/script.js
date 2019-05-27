console.log("Hola mundo");

alert("Me llamo Esteban");

var name = "Esteban";
var surname = "Garós";
console.log(name, surname);

var n1 = 48;
var n2 = 33;
console.log("La suma entre", n1, "i", n2, "és", n1+n2);

var exam_note = 5.1;
if (exam_note>=5) {
    alert("Has aprobado el examen con un " + exam_note);
} else {
    alert("Has suspendido el examen con un " + exam_note);
}

var car = "Tinc un cotxe de color blau";
console.log(car.replace("blau", "verd"));
console.log(car.replace(/o/g, "u"));

var objects = ["taula", "cadira", "ordinador", "llibreta"];
for (var i = 0; i<=3; i++) {
    console.log("L'objecte", objects[i], "està a la posició", i);
}

var operador;
var valor1;
var valor2;
function calculadora (operador, valor1, valor2) {
    var resultat
    if (operador == "suma") {
        resultat = valor1 + valor2;
    } else if (operador == "resta") {
        resultat = valor1 - valor2;
    } else if (operador == "multiplica") {
        resultat = valor1 * valor2;
    }
    console.log(resultat);
}