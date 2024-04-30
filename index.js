const express = require('express');
const app = express();
const port = 4000;
const api = require('./Routes/app')
app.use(express.json())

app.use('/api' , api)

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
})