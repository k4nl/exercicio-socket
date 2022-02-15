const router = require('express').Router();

const productModel = require('../models/productModel');

router.get('/', async (req, res) => {
  console.log( await productModel.getAll());
  const products = await productModel.getAll();

  return res.status(200).json(products);
});

module.exports = router;