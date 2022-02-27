const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('jyyut');
});

app.get('/', (req, res) => {
  res.send('helo');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});
