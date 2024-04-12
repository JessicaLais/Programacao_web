const mat = require('./util/calculadora');
const express = require('express');
const app = express();

app.get('/somar/:a/:b', function(req, res){
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let resultado = mat.somar(a, b);
    res.send("Resultado: "+resultado.toString()); 
    
});

app.get('/subtrair/:a/:b', function(req, res){
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
        let resultado = mat.subtrair(a, b);
        res.send("Resultado: "+resultado.toString()); 
    });

app.get('/multiplicar/:a/:b', function(req, res){
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
        let resultado = mat.multiplicar(a, b);
        res.send("Resultado: "+resultado.toString()); 

});

app.get('/dividir/:a/:b', function(req, res){
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let resultado = mat.dividir(a, b);
    res.send("Resultado: "+resultado.toString()); 
    
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log('App rodando na porta ' + PORT);
});
