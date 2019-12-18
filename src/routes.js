const express = require("express");
const routes = express.Router();

// routes.get("/", (req, res) => {
//     // Product.create({
//     //     title: "Title 1",
//     //     description: "Build native",
//     //     url: "www.google.com.br"
//     // });
//     return res.send('Hello');
// });

const ProductController = require('./controllers/ProductController');

routes.get("/products", ProductController.index);

module.exports = routes;