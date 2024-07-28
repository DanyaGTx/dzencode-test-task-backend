const orders = require('../data/orders');

const getAllOrders = (req, res) => {
  res.json(orders);
};

module.exports = { getAllOrders };
