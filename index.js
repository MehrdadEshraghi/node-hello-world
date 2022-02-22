const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('just hello.ooo4');
});

app.get('/', (req, res) => {
  res.send('hello World.1ooo1');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});
