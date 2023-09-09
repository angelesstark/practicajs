/*Simular la tirada de un juego de ruleta generando un número
aleatorio que representa la cantidad de posiciones por las que pasó la bolilla, 
conociendo que la ruleta debe dar mínimo 5 y máximo 10 vueltas, 
suponiendo que la bolilla empezó en el número 0, y sabiendo que los números posibles son del 0 al 36.
Simular 10 tiradas e imprimir lo siguiente para cada intento:
Nro de juego
Valor Aleatorio Generado
Nro que cayó en la ruleta.
Ejemplo:
Nro de Juego: 1
Valor Aleatorio Generado: 537
Nro que cayó en la ruleta: 19
...
Nro de Juego: 10
Valor Aleatorio Generado: 642
Nro que cayó en la ruleta: 13*/

let numTirada=0;
for (let i = 0; i <=10; i++) {
    numTirada = numTirada + 1;
    let numRandom=Math.floor(Math.random() * 370) + 185; //esto retorna un numero random entre el 185 y el 370
    let numRuleta= numRandom%37;
    console.log('Nro de juego: '+numTirada)
    console.log('Valor Aleatorio Generado:  '+numRandom)
    console.log('Nro que cayó en la ruleta: '+numRuleta)
  }

