const fs = require('fs');

// Função para ler o conteúdo do arquivo
function lerArquivo(nomeArquivo) {
  try {
    const conteudo = fs.readFileSync(nomeArquivo, 'utf8');
    return JSON.parse(conteudo);
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error.message);
    return [];
  }
}

// Função para escrever conteúdo no arquivo
function escreverArquivo(nomeArquivo, conteudo) {
  try {
    fs.writeFileSync(nomeArquivo, JSON.stringify(conteudo, null, 2));
    console.log('Arquivo atualizado com sucesso.');
  } catch (error) {
    console.error('Erro ao escrever no arquivo:', error.message);
  }
}

// Função para adicionar um objeto JSON no arquivo
function adicionarObjeto(nomeArquivo, objeto) {
  const listaObjetos = lerArquivo(nomeArquivo);
  listaObjetos.push(objeto);
  escreverArquivo(nomeArquivo, listaObjetos);
}

// Função para buscar um objeto por nome
function buscarPorNome(nomeArquivo, nome) {
  const listaObjetos = lerArquivo(nomeArquivo);
  return listaObjetos.find(objeto => objeto.nome === nome);
}

// Função para remover um objeto por nome
function removerPorNome(nomeArquivo, nome) {
  const listaObjetos = lerArquivo(nomeArquivo);
  const novaLista = listaObjetos.filter(objeto => objeto.nome !== nome);
  escreverArquivo(nomeArquivo, novaLista);
}

module.exports = {
  lerArquivo,
  adicionarObjeto,
  buscarPorNome,
  removerPorNome
};
