const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('jut');
});

app.get('/', (req, res) => {
  res.send('helo');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});
