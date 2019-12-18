const express = require('express');

// mongoose
const mongoose = require('mongoose');

// RequireDir
const requireDir = require('require-dir');

// Iniciando app
const app = express();

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/myapi', { useNewUrlParser: true, useUnifiedTopology: true });

// require('./src/models/Product');
requireDir('./src/models');

// Testando sabe database
// const Product = mongoose.model('Product');


// Primeira rota
// app.get('/', (req, res) => {
    // Product.create({ title: 'Teste 1', description: 'Bla bla bla', url: 'www.google.com.br'});
    // return res.send('Hello');
// });

app.use('/api', require("./src/routes"));


// Port
app.listen(3000)