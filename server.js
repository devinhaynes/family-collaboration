const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { mongoURI } = require('./config/db');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

const bills = require('./routes/api/v1/bills');
app.use('/api/bills', bills);

const tasks = require('./routes/api/v1/tasks');
app.use('/api/tasks', tasks);

const budget = require('./routes/api/v1/budget');
app.use('/api/budget', budget);

mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log('Successfully connected to DB'))
    .catch(err => console.error(err));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})