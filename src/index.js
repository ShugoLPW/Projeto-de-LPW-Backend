const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://AdmShugo:alwShugo@cluster0.j81zw.mongodb.net/Shugo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

require('./authentication/AuthController')(app);

app.use(routes);

app.listen(3333);


