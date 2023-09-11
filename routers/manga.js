const express = require("express")
var router = express.Router();
const connected = require("../fonction/randomManga")

// manga endpoint who will return random anime object
router.get('/', async (req,res) => {
    const obj = await connected()
    res.send(obj)
})

module.exports = router