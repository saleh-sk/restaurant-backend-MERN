const express = require('express');
const router = express.Router();
const { createPayment, getPayments } = require('../controllers/paymentsController');
const { protect} = require('../middlewares/authMiddleware');
const allowRoles = require('../middlewares/roleMiddleware');

router.get('/', protect, allowRoles('admin'), getPayments);
router.post('/',protect,allowRoles('admin'),createPayment);
module.exports = router;
