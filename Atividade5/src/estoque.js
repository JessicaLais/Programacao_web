let produtos = [];

function ArmazenarProdutos(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    };
    return p;
}
function AdicionarProdutos(p) {
    produtos.push(p);
}

function ListarProdutos() {
    return produtos;
}

function RemoverProdutos(id) {
    produtos = produtos.filter((p) => {
        return p.id != id;
    });
}

function EditarProdutos(id, novoNome, novaQtd) {
    const produto = produtos.find(produto => produto.id === id);
    if (produto) {
        produto.qtd = novaQtd;
        produto.nome = novoNome;
        return "Produto editado com sucesso!";
    } else {
        return "Produto não encontrado. Nenhuma edição realizada.";
    }
}

module.exports = {
    ArmazenarProdutos,
    AdicionarProdutos,
    ListarProdutos,
    RemoverProdutos,
    EditarProdutos
};