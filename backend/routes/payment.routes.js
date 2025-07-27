const router = require('express').Router();
const { createPayment } = require('../controllers/payment.controller');
const auth = require('../middleware/auth.middleware');

router.post('/create', auth, createPayment);

module.exports = router;
