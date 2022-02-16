const express = require('express');
const errorMiddleware = require('./middlewares/errorHandler');
const router = require('./router');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => { console.log(`Ouvindo porta ${port}`) });

app.use(router);
app.use(errorMiddleware);

module.exports = app;
