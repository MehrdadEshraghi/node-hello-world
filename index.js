const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('just hello. jus');
});

app.get('/', (req, res) => {
  res.send('hello World. ju');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});
