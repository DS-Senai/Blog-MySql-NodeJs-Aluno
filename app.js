console.log("Tudo ok")



const express = require("express");
const app = express();
const path = require('path');

app.get('/', function(req,res) {
    res.sendFile(__dirname +  "/index.html")
})

app.use(express.static(path.join(__dirname,"assets")))

const port = 8080;

app.listen(port, function() {
    console.log("Servidor conectado http://localhost:"+port)

})