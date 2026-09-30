// 1- Crie uma função que receba um número e retorne o dobro.
function dobraOnumero (valor){
 return valor * 2
}
console.log(dobraOnumero(5))
// 2- Crie uma função que receba um número e retorne o triplo.
function triplicaOnumero (valor1){
 return valor1 * 3
}
console.log(triplicaOnumero(5))
// 3- Crie uma função que receba dois números e retorne a soma.
function somar(valor1, valor2) {
    return valor1 + valor2;
}

console.log(somar(5, 7));

// 4- Crie uma função que receba dois números e retorne a multiplicação.
function multiplicaçãoDoisNumeros (a,b){
   return a * b
}
console.log(multiplicaçãoDoisNumeros(7,14))
// 5- Crie uma função que receba um salário e calcule aumento de 10%. 
 function aumentoSalario (salario , percentual){
    return salario + (salario * percentual / 100)
 }
 console.log (aumentoSalario(1000,10))

// 6 - Crie uma função que imprima números de 1 até 10.
function imprimirNumeros() {
    for (let valor = 1; valor <= 10; valor++) {
        console.log(valor);
    }
}

imprimirNumeros();
// 7- Crie uma função que some todos os números até 10.
function somarAte10() {
    let soma = 0;

    for (let valor = 1; valor <= 10; valor++) {
        soma = soma + valor;
    }

    return soma;
}

console.log(somarAte10());
