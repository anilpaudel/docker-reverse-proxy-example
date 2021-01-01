const express = require('express');

const app = express();
app.use(express.json());


app.post('/api/*', (req, res) => {
    console.log(req.body.message);
    res.end();
});

app.get('/api/1', (req, res) => {
    res.send("api 1 response");
});

app.get('/api/2', (req, res) => {
    res.send("api 2 response");
});

app.get('/api/*', (req, res) => {
    res.send("api response");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is running...'));

