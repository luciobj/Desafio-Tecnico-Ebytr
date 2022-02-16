const express = require('express');
const router = require('./router');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => { console.log(`Ouvindo porta ${port}`) });

app.use(router);
app.use();

module.exports = app;
