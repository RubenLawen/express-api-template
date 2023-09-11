const express = require('express');
const cors = require("cors");
const app = express();
const port = 1000;

app.use(express.static(__dirname + "/public"));
app.use(cors());
app.use(express.json());

//  Routes
const manga = require("./routers/manga")
const img = require("./routers/img")

app.use("/manga", manga)
app.use("/img", img)

// Domain endpoint who will return api documentation
app.get('/', (req, res) => {
  res.sendFile("index.html", {root: './public'})
})

// if the user goes to an endpoint that is not managed by the service
app.use( (req, res) => {
    res.status(404).json({
      method: req.method,
      respons: `Oops, I think you got lost! Return to the origin Endpoint: ${req.protocol + '://' + req.get('host')}`
    })
});

// for see if the it's the server has been started
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) 
})
