const express = require('express');
const app = express();

app.use(express.json());

let users =[]
let pedidos = []

//rota pra cadastrar usuario

app.post('/users',(req, res)=>{
    const user = req.body;
    users.push(user);
    res.send({messsage: 'Usuario cadastrado com sucesso!',user})
})

app.get('/user_data', (req,res)=> {

});

app.listen(3000,()=>{
    console.log('Servidor monolítico rodando na porta 300');
})