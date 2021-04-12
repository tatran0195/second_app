const express = require('express');
const routes = require('./src/routes');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

routes(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('================================');
    console.log(`Server is listening on Port ${PORT}`);
    console.log('================================');
});
