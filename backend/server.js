const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: 'Backend MoneyTOR jalan',
        data: {
            saldo: 1000000,
            pengeluaran: 250000
        }
    });
});

app.listen(3000, () => {
    console.log('Server jalan di port 3000');
});