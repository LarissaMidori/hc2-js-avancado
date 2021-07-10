const filmes = [
    {
        id: 1,
        titulo: 'Dilema das Redes',
        categoria: 'documentário',
        duracao: 120
    },
    {
        id: 2,
        titulo: 'Enola Holmes',
        categoria: 'aventura',
        duracao: 160
    },
    {
        id: 3,
        titulo: 'Mulan',
        categoria: 'ação',
        duracao: 150
    }
]

const { id, titulo, categoria, duracao } = filmes;
filmes.map(filme => console.log(filme.titulo));