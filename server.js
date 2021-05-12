//git-api server.js

const express = require('express');
const helmet = require('helmet');
app = express();
app.use(helmet());

//Set body parser
app.use(express.json());

//Routes for frontend 
const users = require('./routes/api/users');
app.use('/api/users', users);

app.route('*', (req, res) => {
    res.statusCode(404).send("404, not foud");
});

//set port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));