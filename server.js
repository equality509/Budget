const express = require("express");
const app = express();
app.use("/static", express.static("public"));
const Budget = require('./models/budget.js');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


// app.use("/budget", Budget)

app.get("/budget", (req, res) => {
    res.render('index.ejs',
    {
        budget: Budget
    })
})

// new page
app.get('/budget/new',(req, res) => {
    res.render('new.ejs')
})
// create rouute
app.post('/budget',(req, res) =>{
    Budget.push(req.body)
    res.redirect('/budget')
})

//show page
app.get("/budget/:index", (req, res) => {
    res.render('show.ejs',
    {
        budget: Budget[req.params.index],
        index: req.params.index
    })
})

app.listen(3001,() => {
    console.log('Hello World')
})