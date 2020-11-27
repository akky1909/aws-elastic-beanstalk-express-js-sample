const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Cloud Computing, code commit on the aws pipeline and deploy on elastic beanstalk.Its Working'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
