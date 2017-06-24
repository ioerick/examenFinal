var express = require('express');
var router = express.Router();
var notasController = require('../controllers/notasController')



/* GET home page. */
router.get('/', notasController.principal);
router.get('/registroNota', notasController.registroNota);
router.post('/guardarNota', notasController.guardarNota);

module.exports = router;
