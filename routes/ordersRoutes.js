const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/', protect,ordersController.getOrders);
router.post('/', protect,ordersController.createOrder);
router.get('/:id',protect, ordersController.getOrderById);
router.put('/:id', protect,ordersController.updateOrder);
router.delete('/:id', protect,ordersController.deleteOrder);

module.exports = router;
