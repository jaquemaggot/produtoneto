var controller = require('../controllers/especieControllers');

app.get('/', controller.inicio);
app.get('/listaEspecie', controller.listaEspecie);
app.get('/especie/:codigo', controller.alteraEspecie);
app.get('/especie/excluir/:codigo', controller.deletaEspecie);
app.post('/inserirEspecie', controller.addEspecie);
app.post('/especie/alterar/:codigo', controller.atualizarEspecie);
app.get('/novaEspecie',controller.add);