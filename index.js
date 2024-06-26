const express = require('express');
const path = require('path');
const app = express();

let port = 5000

// Parse Data of POST REQ 
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

// Home get 
app.get('/', (req, res) => {
    res.render("home.ejs")
})

app.post('/saveImg', (req, res) => {
console.log(req.body);
res.send("file get done");
})



// Listening data
app.listen(port, () => {
    console.log(`app listening at port ${port}`);
})
