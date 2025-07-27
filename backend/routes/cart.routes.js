const router = require('express').Router();
const { addToCart } = require('../controllers/cart.controller');
const auth = require('../middleware/auth.middleware');

router.post('/add', auth, addToCart);

module.exports = router;
