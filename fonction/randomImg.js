const { promises: fs } = require('fs')
const path = require("path")
const image = path.join(__dirname, '../img/')

const randomImg = async () => {  

    return await fs.readdir(image)

}

module.exports = randomImg