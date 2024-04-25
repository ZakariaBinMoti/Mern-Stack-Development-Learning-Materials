const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req, res) =>{
    res.send('Hello from the new server')
})

app.get('/data', (req, res) =>{
    res.send('Hello from the data server')
})

app.listen(port, () =>{
    console.log(`App is listening on port ${port}`);
})