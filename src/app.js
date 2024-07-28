require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', productRoutes);
app.use('/api', orderRoutes);

app.use(cors({ origin: "*" }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
