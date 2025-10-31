const express = require('express')
const app = express()
const port = 3000

app.get('/date-time', (req, res) => {
    res.status(200).json({
        dateTime: new Date().toString(),
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});