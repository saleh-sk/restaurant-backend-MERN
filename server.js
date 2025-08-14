const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
connectDB();



const authRoutes = require('./routes/authRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');
const itemRoutes = require('./routes/itemRoutes');
const orderRoutes = require('./routes/ordersRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/auth', authRoutes);
//app.use('/api/protected', protectedRoutes);
app.use('/api/orders', orderRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
