const express = require('express');

const app = express();

app.use(express.static('./'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

app.listen(3000);
