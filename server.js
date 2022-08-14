const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    },
() => {
    console.log("Mongo connection Established")
});
const PORT = process.env.PORT


app.get('/', (req,res) => {
    res.send('server is healthy');
});

const notesController = require('./controllers/book-controller');
app.use('/books', notesController);

app.get('*', (req,res) => {
    res.send('404');
});

app.listen(PORT, () => {
    console.log('listening on port', PORT);
})
