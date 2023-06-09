const express = require("express")
var router = express.Router();
const randomImg = require("../fonction/randomImg.js");

// img endpoint who will return random anime picture
router.get('/', async (req,res) => {
    let arr = await randomImg().then( data => { return data } )
    res.sendFile(arr[Math.floor(Math.random() * arr.length)], {root: './img'})
});

module.exports = router