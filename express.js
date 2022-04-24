const express = require('express');
const router = require ( './routes/index.js')
const app = express();
const  bodyParser = require('body-parser')
app.use(express.json())
app.use(express.urlencoded({extended: true }));
app.use(bodyParser.urlencoded({extended: false }));
app.use('/api',router);


//NO OLVIDAR LA FUNCION ASINCRONA


const PORT = 8080;
const server = app.listen(PORT, ()=>{ 
    console.log(`estamos en el puerto ${server.address().port}`);
})

server.on('error', error=>{  
    console.log(`este es el problema ${error}`);
})