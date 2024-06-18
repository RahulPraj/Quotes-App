const express = require('express');
const app = express();
const quoteRoutes = require('./apis/QuotesRoutes');
const seedDB = require('./seed');
const cors = require('cors')

// connecting DB mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/quotes')
.then(function(){
    console.log("DB Connected");
})
.catch(function(err){
    console.log(err);
})

// Middleware of json
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors({
    origin: ["http://localhost:5173"],
}))

// using seedDB
// seedDB()

// routes
app.use(quoteRoutes);

app.get('/', (req,res)=>{
    res.send("welcome to backend");
})

let PORT = 8080;
app.listen(PORT,()=>{
    console.log(`backend server connected at port: ${PORT} `);

})