const express = require('express');
const app = express();
const videos = require('./routes/videos');
require ('dotenv').config();
const { PORT,CORS_ORIGIN } = process.env;
// const PORT = process.env.PORT || 8080;

const cors = require('cors');

app.use(express.static('public'));
app.use(cors( { origin: CORS_ORIGIN } ));
app.use(express.json());
app.use('/', videos);
app.use('/:id', videos);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

