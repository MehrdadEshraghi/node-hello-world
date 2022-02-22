const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('just hello.444');
});

app.get('/', (req, res) => {
  res.send('hello World.11');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});
