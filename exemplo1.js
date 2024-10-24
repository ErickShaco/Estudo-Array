const prompt = require(`prompt-sync`)()

let notas = new Array(4)
let soma = 0

for(let i = 0 ; i < notas.length; i++){
    const numeros = parseInt(prompt(`Informe a ${i+1}° nota: `))
    notas[i] = numeros
    soma += numeros
}

const media = soma / notas.length


if(media >= 7){
    console.log(`Suas Notas são ${notas}, então você esta Aprovado`)
}
else{
    console.log(`Suas Notas são ${notas}, então você esta Reprovado`)
}