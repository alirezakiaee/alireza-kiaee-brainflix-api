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

const fs = require('fs');
const path = require('path');

router.post('/videos', (req, res) => {
    const newVideo = req.body;
    videos.push(newVideo);

    fs.writeFile(path.join(__dirname, '../data/videos.json'), JSON.stringify(videos, null, 2), (err) => {
        if (err) {
            res.status(500).send('Error saving video');
        } else {
            res.status(201).send(newVideo);
        }
    });
});

module.exports = router

