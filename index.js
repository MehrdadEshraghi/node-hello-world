const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('just hello');
});

app.get('/', (req, res) => {
  res.send('hello World.');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});
