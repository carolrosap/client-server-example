import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e');
    const products = response.data.products;
    res.json(products);
  } catch (error) {
    res.status(500).send('Something broke!');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
