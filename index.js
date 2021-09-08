require('dotenv').config();
const express = require('express');
const app = express();
const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || '3000';

app.use(express.static('public'));

app.listen(PORT, ()=>{
    console.log(`App listening on ${HOST}:${PORT}`);
});
