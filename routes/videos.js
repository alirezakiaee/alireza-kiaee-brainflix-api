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
        "image": "./public/images/Upload-video-preview.313a407cf90c0668da07.jpg",
        "description": req.body.description,
        "views": "1,001,023",
        "likes": "110,985",
        "duration": "4:01",
        "video": "https://project-2-api.herokuapp.com/stream",
        "timestamp": 1626032763000,
        "comments": [
          {
            "id": uniqid(),
            "name": "Micheal Lyons",
            "comment": "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
            "likes": 0,
            "timestamp": 1628522461000
          },
          {
            "id": uniqid(),
            "name": "Gary Wong",
            "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            "likes": 0,
            "timestamp": 1626359541000
          },
          {
            "id": uniqid(),
            "name": "Theodore Duncan",
            "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
            "likes": 0,
            "timestamp": 1626011132000
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

