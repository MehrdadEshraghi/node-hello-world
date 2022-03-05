const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('hllo');
});

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});
