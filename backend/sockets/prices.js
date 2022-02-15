const productModel = require('../models/productModel');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('increasePrice', async ({ id }) => {
    await productModel.increasePrice(id);
    const product = await productModel.getById(id);
    io.emit('refreshCurrentPrice', product);
  })
}); 