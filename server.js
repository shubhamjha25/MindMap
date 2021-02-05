const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const userRouter = require('./routes/userRouter');
const notesRouter = require('./routes/notesRouter');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello, World!");
});

// Router
app.use('/users', userRouter);
app.use('/notes', notesRouter);

// Listen Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});

// MongoDB Connection
const URI = process.env.MONGO_URI;
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('MongoDB Connected ...');
})