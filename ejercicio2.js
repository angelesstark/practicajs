
let posInicial= (Math.random() * 359);
let vueltas = (Math.random() * 10)+5;

let anguloF = (posInicial + vueltas * 360) % 360
console.log("Posición o ángulo Inicial G.A.:", posInicial)
console.log("Valor Aleatorio Generado en Grados:", vueltas * 360)
console.log("Ángulo Final:", anguloF)