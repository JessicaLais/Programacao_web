const express = require('express');
const estoque = require('./src/estoque');
const app = express();


app.get("/adicionar/:id/:nome/:qtd", function (req, res) {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let p = estoque.ArmazenarProdutos(id, nome, qtd);
    estoque.AdicionarProdutos(p);
    res.send(p);
});

app.get("/listar", function (req, res) {
    res.send(estoque.ListarProdutos());
});

app.get("/remover/:id", function (req, res) {
    let id = req.params.id;
    estoque.RemoverProdutos(id);
    res.send(id);
});

app.get("/editar/:id/:nome/:qtd", function (req, res) {
    let id = req.params.id;
    let novoNome = req.params.nome;
    let novaQtd = req.params.qtd;
    let editado = estoque.EditarProdutos(id, novoNome, novaQtd);
    res.send(editado);
});


const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta' + PORT)
});

