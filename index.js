const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('jyy...ut...');
});

app.get('/', (req, res) => {
  res.send('hehnhnhlo');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});
