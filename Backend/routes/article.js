'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

// rutas de prueba
router.get('/test-de-controlador',ArticleController.test);
router.post('/datos-curso',ArticleController.datosCurso);

// rutas utiles
router.post('/save', ArticleController.save); 
router.get('/articles/:last?', ArticleController.getArticles); 
router.get('/article/:id', ArticleController.getArticle); 
router.put('/article/:id', ArticleController.update); 
router.delete('/article/:id', ArticleController.delete);


module.exports = router;
