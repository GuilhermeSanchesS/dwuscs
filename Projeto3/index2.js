//inclusão dos módulos necessários
const express = require('express')
//cria uma aplicação express
const app = express()
//define a porta para acesso à aplicação
const port = 3000
//será usado para converter o corpo da requisição para json
const bodyParser = require('body-parser')
//declara e inicializa um vetor de mensagens
const mensagens = [

    {"texto":"Primeira mensagem"},
    {"texto":"Segunda mensagem"},
    {}

]
//informa que usará o bordyParser para converter o corpo da requisição
//para o formato json
app.use(bodyParser.json())


//Ler todas as mensagens (Read)
app.get('/',(req, res) => {
    res.send(mensagens)
    })
    
    //Ler uma mensagem pelo índice
    app.get('/mensagem1/:id', (req,res) => {
    //parseInt - converte de String para int
    const id = parseInt(req.params.id)
    const mensagem = mensagens[id]
    if (mensagens.length <= id)
    res.send("Não existe mensagem no índice "+id.toString())
    else
    res.send(mensagem[id])
    
    })

    //Criar uma nova mensagem
app.post('/', (req, res) =>{
    //obtém o atributo texto do json
    const mensagem = req.body //.texto.toString()
    const txt = mensagem.texto.toString()
    if (txt.length == 0 )
        res.send('Mensagem Inválida');
    else {
        mensagens.push(mensagem)
        res.send('Mensagem Incluída na Lista')
    }
    })

    //Excluir
app.delete('/:id', function (req, res) {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < mensagens.length){
    //remove um elemento da lista mensagens do índice id
    mensagens.splice(id,1);
    res.send('mensagem removida com sucesso');
    } else {
    res.send('índice não encontrado')
    }
    });

app.put('/:id',  (req, res)=>{
    const id = parseInt (req.params.id)
    if(id>= 0 && id < mensagens.length){
    mensagens[id]=req.body //.texto
    res.send("Alteração Realizada com Sucesso")
} 
else
res.send("Indíce Inválido")
})

app.delete('/:id',  (req, res)=>{
    const id = parseInt (req.params.id)
    if(id>= 0 && id < mensagens.length){
    mensagens.splic(id,1)
    res.send("Remoção Realizada com Sucesso")
} 
else
res.send("Indíce Inválido")
})
    
    app.listen(port)
