let numero = [ 10 , 20 , 30 , 40 , 50]
console.log (numero [2])

let frutas = ["Maça" , "Banana" , "Laranja", "Abacaxi"];

//
frutas.forEach((frutas, index) =>{
    console.log (`${index}: ${frutas}`);
});
//Asiciona na final
frutas.push("Uva")
//adiciona no começo
frutas.unshift("Melão")

console.log(frutas)

//Removendo elementos

frutas.pop();
console.log(frutas)

//remove o primeiro 
frutas.shift();
console.log(frutas)

frutas.splice(2,1)
console.log(frutas)

let mapa = new Map()

mapa.set("nome","Sebastian")
mapa.set ( "numero", 5)
mapa.set("", true, "Icon")

//acessando valores
console.log(mapa.get("nome"))