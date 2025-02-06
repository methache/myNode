const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello csi203,66087954 my name เมธาพร ทองนาค ');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
