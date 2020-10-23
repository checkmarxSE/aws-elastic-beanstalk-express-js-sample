const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello AWS! Welcome to DevSecOps with Checkmarx! Incorporate best-in-breed SAST scanning with ease.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
