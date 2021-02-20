//inclusão dos módulos necessários
const express = require('express')
const handlebars = require('express-handlebars')
//cria uma aplicação express
const app = express()
//define a porta para acesso à aplicação
const port = 3000
//será usado para converter o corpo da requisição para json
const bodyParser = require('body-parser')
//declara e inicializa um vetor de mensagens
const mensagens = []
//informa que usará o bordyParser para converter o corpo da requisição
//para o formato json
app.use(bodyParser.json())

app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Ler uma mensagem pelo índice
app.get('/mensagem', (req,res) => {
    res.listen(mensagem);
});

app.get('/cadmensagem', (req,res) => {
    res.send(cadmensagem);
});
app.post('/adicionamensagem', (req,res) => {
    const mensagem = req.body.texto
    const texto = mensagem.toString()
    if (texto.length == 0){
        res.render('mensagem',{msg: 'Mensagem Inválida'})
    }
    else {
        mensagemes.push(texto)
        res.render('mensagem',{msg: 'Inclusão Concluída com Sucesso'})
    }
});

/***************************************************|
 * Incluir/Consultar/Remover e Alterar             *|
 * produto (usando post) - Produto: codigo,        *|
 * descricao, quantidade, preco (usando postman)   *|
 * Depois criar outro projeto para incluir um novo *|
 * produto em uma lista usando um formulário html  *|
 ***************************************************/

 
//Ler uma mensagem pelo índice
app.get('/produto/:id', (req,res) => {
    //parseInt - converte de String para int
    const id = req.params.id
    const produto = produtos.filter(function(item){
        return (item.id == id);
    });
    res.send(produto);

});

//Criar
app.post('/', (req, res) => {
    const produtos = req.body
    const id = req.body.id
    const indice = produtos.findIndex(function(item){
        return item.id == id
    })
    
    if (indice == -1){
        produtos.push(produto)
        res.send('Inclusão Concluída com Sucesso')
    }
    else {
        res.send('Id já existe');
    }
});
app.post('/automatico', (req, res) => {
    const produto = req.body
    const codigos = []
    for(i=0; i < produtos.length; i=i+1){
        codigos.push(parseInt(produtos[i].id))
    }
    var id = 101
    if(codigos.length > 0){
        id = codigos.reduce(function(a,b){
            return Math.max(a,b)
        })+1
    }
    

    produto.id = id.toString()
    produtos.push(produto)
    res.send('Inclusão Concluída com Sucesso')
});



//Update
app.put('/:id', (req, res) => {
    const id = req.params.id
    const produto = produtos.findIndex(function(item){
        return item.id == id
    })
    if (produto > -1){
        produtos[produto] = req.body
        res.send('Alterar Realizada com Sucesso')
    } else {
        res.send('Id Inválido')
    }
});

//Excluir
app.delete('/:id',(req,res)=>{
    const produto = req.body
    const id = req.params.id
    const indice = produtos.findIndex(function(item){
        return (item.id == id);
    })
    if (indice == -1){
        res.send("Índice Inválido")
    }else {
        produtos.splice(indice,1)
        res.send('Remoção Realizada com Sucesso')
    }
});

//Delete
app.delete('/:id',(req,res)=>{
    const produto = req.body
    const id = req.params.id
    const indice = produtos.findIndex(function(item){
        return (item.id == id);
    })
    if (indice == -1){
        res.send("Índice Inválido")
    }else {
    produtos.splice(indice,1)
        res.send('Remoção Realizada com Sucesso')
    }
});

app.listen(port);