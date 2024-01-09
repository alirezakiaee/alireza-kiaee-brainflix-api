const express = require('express');
const router = express.Router();
const videos = require('../data/videos.json');

router.get('/videos', (req, res) => {
    res.send(videos);
})

router.get('/videos/:id', (req, res) => {
    const id = req.params.id
    const video = videos.find(video => video.id === id)
    res.send(video)
})



module.exports = router

