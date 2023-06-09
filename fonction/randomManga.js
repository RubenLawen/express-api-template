const { MongoClient } = require("mongodb")
const config = require("../config.json")
const url = `mongodb+srv://${config.dbUser}:${config.dbPassword}@cluster0.0krxkcr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url, { useUnifiedTopology: true}, { useNewUrlParser: true }, { connectTimeoutMS: 30000 }, { keepAlive: 1})
const db = client.db(config.manga)

const connected = async () =>{
    const lengther = await db.collection("manga").countDocuments().then(counter =>{ return counter } )
    obj = await db.collection("manga").findOne( { "index": parseInt(Math.random() * (lengther) + 1) } )
    delete obj._id,
    delete obj.index
    return obj
}

module.exports = connected
