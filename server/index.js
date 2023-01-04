const express = require('express')
const bodyparser = require('body-parser')
const app = express()
let ans = []
const data = "5 5\n1 2 N\nLFLFLFLFF\n3 3 E\nFFRFFRFRRF"
const func = require('./func');
//code for multi line






app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:true
}))







app.post("/",(req,res) => {
const data = req.body.input
ans = func(data); 
})



app.get('/api', (req, res) => {
    res.json({"data":ans})
})




app.listen(4000, async()=>{
    console.log("running")
})








