let produtos = [];

function criarProduto(id,nome,qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    };
    return p;
}
function adicionarProdutos(p){
    produtos.push(p);
}

function listarProdutos(){
    return produtos;
}

function removerProdutos(id){
    produtos.filter((p) => {
        return p.id != id;
    });
}
module.exports = {
    criarProduto,
    adicionarProdutos,
    listarProdutos,
    removerProdutos
};
