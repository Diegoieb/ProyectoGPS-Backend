'use strict'
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true,

    autoIndex: true, //this is the code I added that solved it all
    keepAlive: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4
}
//importar routes
const productRoutes = require('./src/routes/product.routes.js');
const saleRoutes = require('./src/routes/sale.routes.js');
const saleProductRoutes = require('./src/routes/saleProduct.routes.js');
const userRoutes = require('./src/routes/user.routes.js');

const app = express();
const port = 3000;
app.use(cors());
app.options('*',cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//app.use() routes
app.use('/api',productRoutes);
app.use('/api',saleRoutes);
app.use('/api',saleProductRoutes);
app.use('/api',userRoutes);
mongoose.connect('mongodb://localhost:27017/projectGPS', options).then(()=>console.log('Conexion exitosa a la base de datos')).catch((err)=>console.log('Problemas al conectar a la base de datos'));
app.listen(port,()=>{console.log(`http://localhost:${port}`)});
module.exports = app;
// npm install express mongoose cors body-parser