const express = require('express');
const Product = require('./models/product');
const generateToken = require('./utils/token');
const authenticate = require('./middleware/auth');
const mongoose = require('mongoose');
const app = express();

app.get('/products', authenticate, async (req, res) => {
    try {
      const products = await Product.find({}, 'name price');
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.post('/products', authenticate, (req, res) => {

  });

mongoose.connect('mongodb://localhost:27017/assign10', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('Connected to the database');
}).catch((error) => {
  console.error('Error connecting to the database:', error);
});
const secretKey = 'ibks12355'; 
