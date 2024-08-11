const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
     var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log('Request received at /api1', fullUrl);
    res.send('Courses API Response');
});

app.listen(PORT, () => {
    console.log(`Courses API is running on port ${PORT}`);
});


