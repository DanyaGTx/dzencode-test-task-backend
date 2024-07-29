require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cors = require('cors');
const http = require('http');
const setupSocketServer = require('./sockets'); 

const app = express();
const server = http.createServer(app);

setupSocketServer(server);

const PORT = process.env.PORT || 3001;

app.use(cors({ origin: "*" }));

app.get('/', (req, res) => {
  res.send('<h1>Endpoints:  <br /> /api/orders <br /> /api/products</h1>');
});

app.use('/api', productRoutes);
app.use('/api', orderRoutes);


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
