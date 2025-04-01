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
res.send({users})
});

app.post('/orders',(req, res)=>{
    const order = req.body;
    pedidos.push(order);
    res.send({messsage: 'Pedido cadastrado com sucesso!',order})
})

app.get('/orders_data', (req,res)=> {
res.send({pedidos})
});

app.get('/all_data',(req, res)=>{
    res.send({users, pedidos});
})



app.listen(3000,()=>{
    console.log('Servidor monolítico rodando na porta 3000');
})