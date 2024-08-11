const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
    console.log('Request received at /api2');
    res.send('Learners API Response');
});

app.listen(PORT, () => {
    console.log(`Learners API is running on port ${PORT}`);
});


