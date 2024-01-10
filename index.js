const express = require('express');
const app = express();
const PORT = 8080;
const videos = require('./routes/videos');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/', videos);
app.use('/:id', videos);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

