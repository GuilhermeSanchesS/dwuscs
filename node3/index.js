/*
    Programa: Revisão Node.js - 3
    versão: 1.0.0
    Data: 06/04/2021
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
    });

    //Ex01.1
    app.get('/professorIn',async(req,res)=>{
        criterio= {_codigo: {$regex:/^in/}};
        const mens = await professors.find(criterio).toArray();
        res.send(mens);
    });
    //Ex01.2
    app.get('/professorDeT',async(req,res)=>{
        criterio= {_codigo: {$regex:/^det/}};
        const mens = await professors.find(criterio).toArray();
        res.send(mens);
    });
    //Ex01.3
    app.get('/professor1/:min&:max',async(req,res)=>{
        const min = parseInt(req.params.min);
        const max = parseInt(req.params.max);
        const criterio= {$and:[{"hourly": {$gte: min}},{"hourly": {$lte: max}}]};
        const propriedades = {"name":1, "hourly":1};
        const mens = await professors.find(criterio).project(propriedades).toArray();
        res.send(mens);
    });
    //Ex01.4
    app.get('/professor2',async(req,res)=>{
        const criterio= {"contract": "indeterminado"};
        const propriedades = {"name":1,"level":1 , "letter":1};
        const mens = await professors.find(criterio).project(propriedades).toArray();
        res.send(mens);
    });
    //Ex01.5
    app.get('/professor3',async(req,res)=>{
        valor = /[a-m]/;
        criterio= {"name": new RegExp(valor)};
        propriedades = {"name":1, "hourly":1};
        const mens = await professors.find(criterio).project(propriedades).toArray();
        res.send(mens);
    });

    //Altera indivcodigoual
    app.put('/professorIn/codigo',async(req,res)=>{
        const atu= req.query.c;
        const professor = req.body;

        const result = await professors.updateOne(
            {
                codigo: new RegExp(atu)
            },
            {
                $set: {...professor}
            }
            ).then(result=>{
            console.log('Foi atualizado %i item!',result.modifiedCount)
            res.send('Atualização realizada com sucesso ');
            return result;
        }).catch(err => console.error('Falha ao atualizar documento(s):%s',err));
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
        const resultado=await professors.insertMany(professor).then(result => {
            console.log('Itensinseridos: %i',resultado.insertedCount);
            res.send('professores inseridos com sucesso '+ resultado.insertedCount);
            return result;
        }).catch(err => console.error('Falhaao Inserir Documentos:%s',err))
    })


    app.listen(PORT, () => {
        console.info(`Servcodigoor rodando em localhost:${PORT}`)
        console.log('Log Servcodigoor')
        console.warn('Warn servcodigoor')
    })

})()