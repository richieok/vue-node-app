require('dotenv').config();
const express = require('express');
const app = express();
const apiRoute = require('./routes/api');
const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || '3000';

app.use(express.static('public'));

app.use('/api', apiRoute);

// app.get('/api', (req, res)=>{
//     res.send('API');
// });

app.listen(PORT, ()=>{
    console.log(`App listening on ${HOST}:${PORT}`);
});
