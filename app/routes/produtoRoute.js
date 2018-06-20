var controller = require('../controllers/produtoControllers');

app.get('/', controller.inicio);
app.get('/listaProduto', controller.listaProduto);
app.get('/produto/:codigo', controller.alteraProduto);
app.get('/produto/excluir/:codigo', controller.deletaProduto);
app.post('/inserirProduto', controller.addProduto);
app.post('/produto/alterar/:codigo', controller.atualizarProduto);
app.get('/novoProduto',controller.add);