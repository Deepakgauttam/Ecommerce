const router = require('express').Router();
const { createOrder, getUserOrders } = require('../controllers/order.controller');
const auth = require('../middleware/auth.middleware');

router.post('/', auth, createOrder);
router.get('/', auth, getUserOrders);

module.exports = router;
