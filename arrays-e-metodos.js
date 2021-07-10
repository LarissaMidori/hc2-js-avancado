const alunos = ['Maria', 'Clara', 'Leila', 'Mark'];

// acessar informação em um array
console.log(alunos[2]);

//operador spread (...)
const maisAlunos = [...alunos, 'Simara', 'Leon', 'Arthur'];
console.log(maisAlunos[5]);

//método de iteração com map e arrow function
maisAlunos.map(aluno => console.log(aluno));

//método filter e arrow function
const numeros = [3, 51, 78, 95, 54, 43, 28, 99];

const numerosImpares = numeros.filter(num => num % 2 != 0);
console.log(numerosImpares);

const numerosPares = numeros.filter(num => num % 2 == 0);
console.log(numerosPares);

// método find
const cores = ['azul', 'verde', 'rosa', 'roxo', 'branco'];
cores.find(cores => console.log(cores === 'roxo'));

// método sort
const num = [23, 47, 14, 95, 56, 43, 85, 10];

const ordemCrescente = num.sort();
console.log(ordemCrescente);

const ordemDecrescente = num.sort((a, b) => b - a);
console.log(ordemDecrescente);

// método reduce - reduz nosso array a um resultado de uma operação matemática
const numbers = [25, 30 , 5];
const soma1 = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual;
},0) // apenas soma os números do array 

const soma2 = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual;
},10) // soma os números do array e adiciona + 10 na soma
console.log(soma1);
console.log(soma2);
