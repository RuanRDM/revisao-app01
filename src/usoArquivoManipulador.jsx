export default App;

const arquivoManipulador = require('./arquivoManipulador.jsx');

const nomeArquivo = 'dados.json';

// Exemplo de uso das funções
console.log('Conteúdo atual do arquivo:');
console.log(arquivoManipulador.lerArquivo(nomeArquivo));

const novoObjeto = { nome: 'Node.js', ano: 2021 };
arquivoManipulador.adicionarObjeto(nomeArquivo, novoObjeto);
console.log('Objeto adicionado ao arquivo.');

console.log('Buscando objeto por nome "CSS3":');
console.log(arquivoManipulador.buscarPorNome(nomeArquivo, 'CSS3'));

arquivoManipulador.removerPorNome(nomeArquivo, 'CSS3');
console.log('Objeto removido do arquivo.');

console.log('Conteúdo atualizado do arquivo:');
console.log(arquivoManipulador.lerArquivo(nomeArquivo));
