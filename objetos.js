
// objeto
const pessoa = {
    nome: 'Larissa',
    idade: 35,
    cidade: 'São Paulo'
}

// notação de ponto
console.log(pessoa.nome);

// notação de colchetes
console.log(pessoa['idade']);

// como desestruturar objetos -Objetos Destructuring

const { nome, idade, cidade } = pessoa;
console.log(nome);
console.log(idade);
console.log(cidade);
