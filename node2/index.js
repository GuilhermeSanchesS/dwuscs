/*
Programa: Res

*/

//Inclusão dos módulos necessários
const express = require('express')
//cria uma aplicação express
const app = express()
//define a porta para acesso à aplicação
const PORT = process.env.PORT || 3000
//será usado para converter o corpo da requisição para json

const mongoClient = require('mongodb').MongoClient;
const { Objectcodigo } = require('mongodb');
(async() => {
    const url = 'mongodb://localhost:27017'
    const dbNome = 'escola'
    const cliente = await mongoClient.connect(url, {useUnifiedTopology: true})
    const db = cliente.db(dbNome)

    const professors = db.collection('professor');

     app.use(express.json());

    //Read All (Ler Tudo)
    app.get('/professors', async (req, res) => {
        res.send(await professors.find().toArray())
    })

    //Read Single (Ler indivcodigoual)
    app.get('/professors/:quant',async(req,res)=>{
        const mens = await professors.find().toArray()
        res.send(mens)
     });

    //Read Single (Ler indivcodigoual)
    app.get('/professors/:codigo',async(req,res)=>{
        const codigo= req.params.codigo;
        const mens = await professors.findOne({_codigo: Objectcodigo(codigo)})
        res.send(mens)
        
     });

    //Altera indivcodigoual
    app.put('/professors/:codigo',async(req,res)=>{
        const codigo=req.params.codigo;
        const professor = req.body
        const result = await professors.updateOne(
        {
            //_codigo: Objectcodigo(codigo)},
            texto: codigo.toString()},
            {
                $set: {...professor}
            }
        )
        res.send('Alteração indivcodigoual por codigo realizada com sucesso' + result);
    });

    //Remover professor
    app.delete('/professors/:codigo',async(req,res) =>{
        const codigo = req.params.codigo.toString;
        await professors.deleteOne({ _codigo: Objectcodigo(codigo)});
        //await professors.deleteOne({ texto: codigo});
        await professors.deleteMany({ descricao: {$type: "string"}});
        res.send('professor removcodigoa com sucesso');
    })

    //Criar professor
    app.post('/professor',async(req,res)=>{
        const professor=req.body
        await professors.insertOne({ professor}).then(result => {
            console.log('Foi insercodigoo %i item!',result.insertedCount);
            res.send('professor criada com sucesso ')
            return result
          })
          .catch(err => console.error('Falha ao Inserir Documentos: %s',err))
        
    })

    //Criar várias professors
    app.post('/professors',async(req,res)=>{
        const professor=req.body
        const resultado=await professors.insertMany(professor)
        res.send('Professores criados com sucesso' + resultado.insertedCount)
    })

    app.listen(PORT, () => {
        console.info(`Servcodigoor rodando em localhost:${PORT}`)
        console.log('Log Servcodigoor')
        console.warn('Warn servcodigoor')
    })

})()
