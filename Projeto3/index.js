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
    {"texto":"1º mensagem"},
    {"texto":"2º mensagem"}
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
        res.send(mensagem);

});
//Criar uma nova mensagem
app.post('/', (req, res) => {
    //obtém o atributo texto do json
    const mensagem = req.body.texto.toString();
    //const txt = mensagem.toString();
    if (mensagem.length == 0){//txt.length == 0
        res.send('Mensagem Inválida');
    }
    else {
        mensagens.push(mensagem); //txt
        res.send('Incluída Conculido com Sucesso');
    }
});
//Atualizar
app.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const mensagem = req.body.texto;
    if (id >= 0 && id < mensagens.length){
        mensagens[id] = mensagem;
        //mensagem[id] = req.body.texto;
        res.send('Alterar individual por índice');
    } else {
        res.send('Indice Inválido');
    }
});
//Excluir
app.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < mensagens.length){
        //remove um elemento da lista mensagens do índice id
        mensagens.splice(id,1);
        res.send('mensagem removida com sucesso');
    } else {
        res.send('índice não encontrado');
    }
});

app.listen(port);