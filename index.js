const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send(process.env.NAME);
});

app.get('/', (req, res) => {
  res.send('sina test');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Serveunkkkning');
});
