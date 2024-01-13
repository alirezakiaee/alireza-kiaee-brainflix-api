const express = require('express');
const router = express.Router();
const videos = require('../data/videos.json');
const uniqid = require('uniqid');


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
    const newVideo = {
        "id": uniqid(),
        "title": req.body.title,
        "channel": "Alireza's channel",
        "image": "http://localhost:8080/images/Upload-video-preview.313a407cf90c0668da07.jpg",
        "description": req.body.description,
        "views": "1,001,023",
        "likes": "110,985",
        "duration": "4:01",
        "video": "https://project-2-api.herokuapp.com/stream",
        "timestamp": 1626032763000,
        "comments": [
            {
              "id": "2d818087-c1f4-4ec2-bcdc-b545fd6ec258",
              "name": "Martin Evergreen",
              "comment": "I’ve loved trains ever since I was a child. I dreamed about riding one around the world. This is the most fantastic thing I’ve seen yet, and I’m watching it ON a train!",
              "likes": 3,
              "timestamp": 1632512763000
            },
            {
              "id": "191de346-b3c2-47b4-bf5b-6db90d1e3bdc",
              "name": "Emily Harper",
              "comment": "Let’s collaborate on a video for saving money on cheap train tickets! I’ll have my associates contact yours.",
              "likes": 0,
              "timestamp": 1632496261000
            }
          ]
      };
    
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

