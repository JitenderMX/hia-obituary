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
// Login get 
app.get('/login', (req, res) => {
    res.render("login.ejs")
})
// Sign Up get 
app.get('/sign-up', (req, res) => {
    res.render("sign-up.ejs")
})

// Forgot Password get 
app.get('/forgot-password', (req, res) => {
    res.render("forgot-password.ejs")
})
// Forgot Password get 
app.get('/verify-otp', (req, res) => {
    res.render("verify.ejs")
})

app.post('/saveImg', (req, res) => {
console.log(req.body);
res.send("file get done");
})



// Listening data
app.listen(port, () => {
    console.log(`app listening at port ${port}`);
})
