//git-api server.js

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
app = express();
app.use(helmet());

//set port
const port = process.env.PORT || 5000;

//Set body parser
app.use(express.json());

//Cross origin permission
app.use(cors({
    origin: ['*', 'http://localhost:3000', process.env.Port]
}));



//Routes for frontend 
const users = require('./routes/api/users');
app.use('/api/users', users);

app.route('*', (req, res) => {
    res.statusCode(404).send("404, not foud");
});

//Use port
app.listen(port, () => console.log(`Server started on port ${port}`));