const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Cloud Computing. Amazon Web Services'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
