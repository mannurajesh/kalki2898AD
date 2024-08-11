const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.get('/', (req, res) => {
    console.log('Request received at /api3');
    res.send('Leads API Response');
});

app.listen(PORT, () => {
    console.log(`Leads API is running on port ${PORT}`);
});


