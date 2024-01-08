const express = require('express');
const app = express();
const PORT = 8080;
const videos = require('./routes/videos');


app.use('/videos', videos);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})