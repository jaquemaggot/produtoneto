var model = require('../models/especie')

module.exports = {
    inicio,
    listaEspecie,
    add,
    alteraEspecie,
    addEspecie,
    atualizarEspecie,
    deletaEspecie
}

function inicio(req, res) {
    res.render('../app/views/index.ejs');
}

function listaEspecie(req, res) {
    model.listarEspecie(function (err, result) {
        if (err) {
            throw err;
        }
        res.render('../app/views/listaEspecie.ejs', { especie: result });
    })
}
//----O que essa função chama???
function add(req, res) {
    res.render('../app/views/novaEspecie.ejs');
}

function alteraEspecie(req, res) {
    var id = req.params.codigo;
    model.listarProdutoById(id, function (err, result) {
        if (err) {
            throw err;
        }
        res.render('../app/views/especieAlterar.ejs', { especie: result });
    })

}

function addEspecie(req, res) {
    var dados = req.body;
    model.inserirEspecie(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listaEspecie');
    })
}

function atualizarEspecie(req, res) {
    var dados = req.body;
    model.updateEspecie(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listaEspecie');
    })
}

function deletaEspecie(req, res) {
    id = req.params.codigo
    model.deletarEspecie(id, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/listaEspecie');
    })
}
