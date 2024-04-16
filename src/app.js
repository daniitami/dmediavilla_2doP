const express=require('express');
const clientes=require('./rutas/campaigns');

const app=express();

app.use(express.json());
app.use('/campaigns',campaigns);

app.listen(3302,()=>{
    console.log('Servidor ejecutandose en el puerto 3302 ');
})