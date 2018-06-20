var client = require('../../config/dbconnection');
var tabela1 = "produto";
var tabela2 = "especie";

module.exports = {
    listarEspecie,
    listarEspecieBtId,
    inserirEspecie,
    deletarEspecie,
    updateEspecie
}


function listarEspecie (callback){
    client.query('SELECT * FROM ' + tabela2 , callback);
}

function listarEspecieBtId(id, callback){
	client.query('SELECT * FROM ' + tabela2 + ' WHERE esp_codigo = ' + id, callback)
}

function inserirEspecie(dados, callback) {
	var msql = 'INSERT INTO ' + tabela2 + ' SET ? ';
	client.query(msql, dados, callback);
}

function deletarEspecie(id, callback) {
    var msql = 'DELETE FROM ' + tabela2 + ' WHERE esp_codigo = ' + id;
    client.query(msql, callback);
}

function updateEspecie(dados, callback) {
    var msql = "UPDATE " + tabela2 + " SET esp_descricao  = '" + dados.esp_descricao + "' , esp_validade = " + dados.esp_validade  + "' , esp_orientacao = " + dados.esp_orientacao +  " WHERE esp_codigo = " + dados.esp_codigo;
    client.query(msql, callback);
}