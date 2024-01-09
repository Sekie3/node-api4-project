require('dotenv').config();
const express = require('express');
const app = express();


app.use(express.json());


require('./api/server')(app); 

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
