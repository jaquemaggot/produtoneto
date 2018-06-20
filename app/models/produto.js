var client = require('../../config/dbconnection');
var tabela1 = "produto";
var tabela2 = "especie";

module.exports = {
    listarProduto,
    listarProdutoById,
    inserirProduto,
    deletarProduto,
    updateProduto
}

function listarProduto (callback){
    client.query('SELECT * FROM ' + tabela1 + ' p inner join ' + tabela2 + ' e on e.esp_codigo = p.esp_codigo ', callback);
}

function listarProdutoById(id, callback){
	client.query('SELECT * FROM ' + tabela1 + ' WHERE prd_codigo = ' + id, callback)
}

function inserirProduto(dados, callback) {
	var msql = 'INSERT INTO ' + tabela1 + ' SET ? ';
	client.query(msql, dados, callback);
}

function deletarProduto(id, callback) {
    var msql = 'DELETE FROM ' + tabela1 + ' WHERE prd_codigo = ' + id;
    client.query(msql, callback);
}

function updateProduto(dados, callback) {
    var msql = "UPDATE " + tabela1 + " SET prd_descricao  = '" + dados.prd_descricao + "' , prd_validade = " + dados.prd_validade  + "' , prd_especie = " + dados.prd_especie +  " WHERE esp_codigo = " + dados.esp_codigo;
    client.query(msql, callback);
}