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
    {
        "id": "101",
	    "nome": "Guilherme S",
	    "peso": "62",
	    "idade": "1.82"
    },
    {
        "id": "102",
	    "nome": "Guilherme C",
	    "peso": "55",
	    "idade": "1.70"
    },
    {
        "id": "103",
	    "nome": "Guilherme D",
	    "peso": "98",
	    "idade": "1.68"
    },
    
]
//informa que usará o bordyParser para converter o corpo da requisição
//para o formato json
app.use(bodyParser.json())
//Ler todas as mensagens (Read)
app.get('/',(req, res) => {
res.send(pessoas)
})

//Ler uma mensagem pelo índice
app.get('/mensagem1/:id', (req,res) => {
    //parseInt - converte de String para int
    const id = req.params.id
    const pessoa = pessoas.filter(function(item){
        return (item.id == id);
    });
    res.send(pessoa);

});

//Criar
app.post('/', (req, res) => {
    const pessoas = req.body
    const id = req.body.id
    const indice = pessoas.findIndex(function(item){
        return item.id == id
    })
    
    if (indice == -1){
        pessoas.push(pessoa)
        res.send('Inclusão Concluída com Sucesso')
    }
    else {
        res.send('Id já existe');
    }
});
app.post('/automatico', (req, res) => {
    const pessoa = req.body
    const codigos = []
    for(i=0; i < pessoas.length; i=i+1){
        codigos.push(parseInt(pessoas[i].id))
    }
    var id = 101
    if(codigos.length > 0){
        id = codigos.reduce(function(a,b){
            return Math.max(a,b)
        })+1
    }
    

    pessoa.id = id.toString()
    pessoas.push(pessoa)
    res.send('Inclusão Concluída com Sucesso')
});



//Update
app.put('/:id', (req, res) => {
    const id = req.params.id
    const pessoa = pessoas.findIndex(function(item){
        return item.id == id
    })
    if (pessoa > -1){
        pessoas[pessoa] = req.body
        res.send('Alterar Realizada com Sucesso')
    } else {
        res.send('Id Inválido')
    }
});

//Excluir
app.delete('/:id',(req,res)=>{
    const pessoa = req.body
    const id = req.params.id
    const indice = pessoas.findIndex(function(item){
        return (item.id == id);
    })
    if (indice == -1){
        res.send("Índice Inválido")
    }else {
        pessoas.splice(indice,1)
        res.send('Remoção Realizada com Sucesso')
    }
});

//Delete
app.delete('/:id',(req,res)=>{
    const pessoa = req.body
    const id = req.params.id
    const indice = pessoas.findIndex(function(item){
        return (item.id == id);
    })
    if (indice == -1){
        res.send("Índice Inválido")
    }else {
    pessoas.splice(indice,1)
        res.send('Remoção Realizada com Sucesso')
    }
});

app.listen(port);