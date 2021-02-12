const express = require('express');
const app = express()
const port = 3000;
const badyParser = require('body-parser')
const mensagens = [
    {"texto": "Primeiro mensagem"},
    {"texto": "Segunda mensagem"},
]
app.use(badyParser.json())

app.get('/', (req, res) => {
    res.send('Alô Mundo!')
});
app.get('/mensagem1/:id', (req, res) => {
    const id = req.params.id
    const mensagem = mensagens.find(msg => msg.id === id)
    res.sendMensagem('Mensagem1!')
});
app.post('/', (req, res) => {
    res.send('POST request to homepage')
});
app.listen(port);