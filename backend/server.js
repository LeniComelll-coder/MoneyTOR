const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('MoneyTOR backend jalan');
});

app.listen(3000, () => {
    console.log('Server jalan di port 3000');
});