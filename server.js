const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const ingredientsRoutes = require('./routes/ingredientRoutes');
const itemRoutes = require('./routes/itemRoutes');
const ordersRoutes = require('./routes/ordersRoutes');
const paymentsRoutes = require('./routes/paymentsRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/ingredients', ingredientsRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/payments', paymentsRoutes);

app.get('/', (req, res) => {
  res.send('Restaurant API is running ');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
