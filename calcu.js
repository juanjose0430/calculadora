let escogeU = prompt("escribe la operacion que quieres realizar: sumar, restar, dividir, multiplicar")
let numeroA =parseInt(prompt("Ingrese un numero"));
let numeroB =parseInt(prompt("Ingrese otro numero"));

let procesoS = sumar(numeroA, numeroB);


function sumar(a, b){
    return a + b;

};



let procesoR = restar(numeroA, numeroB);


function restar(a, b){
    return a - b;

};



let procesoD = dividir(numeroA, numeroB);


function dividir(a, b){
    return a / b;

};



let procesoM = multiplicar(numeroA, numeroB);


function multiplicar(a, b){
    return a * b;

};








switch (escogeU) {
    case "sumar":
        alert("El resultado de tu suma es :" + procesoS)
        break;

    case "restar":
        alert("El resultado de tu resta es :" + procesoR)
        break;

    case "dividir":
        alert("El resultado de tu division es :" + procesoD)
        break;


    case "multiplicar":
        alert("El resultado de tu multiplicacion es: " + procesoM)
        break;

    default:
        alert("La opcion que escogiste no existe dentro de las opciones")
        break;
}





