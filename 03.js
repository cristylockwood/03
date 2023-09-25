
let numero = parseInt(prompt("Digite um número: "));


if (!isNaN(numero)) {
  console.log(`Tabuada do ${numero}:`);
  
  for (let i = 0; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
} else {
  console.log("Por favor, insira um número válido.");
}
