var model = require('../models/produto');
var modelEspecie = require('../models/especie');

module.exports = {
    inicio,
    listaProduto,
    add,
    alteraProduto,
    addProduto,
    atualizarProduto,
    deletaProduto
}

function inicio(req, res) {
    res.render('../app/views/index.ejs');
}

function listaProduto(req, res) {
    model.listarProduto(function (err, result) {
        if (err) {
            throw err;
        }
        res.render('../app/views/listaProduto.ejs', { produto: result });
    })
}
//----O que essa função chama???
function add(req, res) {
    res.render('../app/views/novoProduto.ejs');
}

function alteraProduto(req, res) {
    var id = req.params.codigo;
    model.listarProdutoById(id, function (err, result) {
        if (err) {
            throw err;
        }
        modelEspecie.listarEspecie( function(err, data) {
            if(err) {
                throw err;
            } 

            res.render('../app/views/produtoAlterar.ejs', { produto: result, especies: data });
        });
    })

}

function addProduto(req, res) {
    var dados = req.body;
    model.inserirProduto(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listaProduto');
    })
}

function atualizarProduto(req, res) {
    var dados = req.body;
    model.updateProduto(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listaProduto');
    })
}

function deletaProduto(req, res) {
    id = req.params.codigo
    model.deletarProduto(id, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listaProduto');
    })
}
