//Objeto
const persona = {
    Nombre:"Jesus",
    Apellido:"Fernandez",
    Edad: 32,
    Carrera: "IPM"
};

const autos = {
    Marca:"NISSAN",
    Modelo:"Sentra",
    Ano: "2017",
    Serie: 057,
    Color: "Gris"
};

document.getElementById("persona").innerHTML = persona.Nombre + " Tiene la edad de " + persona.Edad + " Estudio " + persona.Carrera;
document.getElementById("autos").innerHTML = autos["Marca"]+ " Modelo: " + autos["Modelo"] + " Ano " + autos["Ano"];


//Diferencia entre var y let - const

var a = 7;
var b = 12;

if (a === 7){
    let a = 4; //El alcance es dentro bloque if
    var b = 1; //El alnce es dentro de la funcion

    console.log("Dentro del if:" + a + "-" + b);
}

console.log("Dentro del if:" + a + "-" + b);

function varTest(){
    var x = 31;
    if (true) {
        var x = 71; //misma variable
        console.log(x); //71
    }
    console.log(x); //71
}

function letTest(){
    let x = 31;
    if (true) {
        let x = 71; //asigna nuevo valor variable
        console.log(x); //71
    }
    console.log(x); //71
}

varTest();
letTest();

const carros = ["BMW", "VOLVO", "Sabura", "FORD", "Renault"];

let text = "";
for (let i = 0; i < carros.length; i++) {
    text += carros[i] + "<br>";
}
document.getElementById("carros").innerHTML = text;

let numero = "";
let i = 0;

while (i < 10){
    numero += "<br> El numero es " + i;
    i++;
}
document.getElementById('conteo').innerHTML = numero;

//--------------------------------------------------------

let dia;
switch (new Date().getDay()) {
    case 0:
        dia = "Domingo";
        break;
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";
        break;
    case 3:
        dia = "Miercoles";
        break;
    case 4:
        dia = "Jueves";
        break;
    case 5:
        dia = "Viernes";
        break;
    case 6:
        dia = "Sabado";
}

document.getElementById('fecha').innerHTML = "El dia es " + dia;