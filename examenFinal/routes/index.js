var express = require('express');
var router = express.Router();
var notaController = require('../controllers/notaController');

/* GET home page. */
router.get('/', notaController.principal);
router.get('/registroNota', notaController.registroNota);
router.post('/guardarNota', notaController.guardarNota);
module.exports = router;
