const mongoose = require('mongoose');


let quotesSchema = new mongoose.Schema({
    img:{
        type:String,
        trim:true,
        required:true
        
    },
    author:{
        type:String,
        trim:true,
        required:true
    },
    age:{
        type:Number,
        min:0,
    },
    text:{
        type:String,
        trim:true,
        required:true
    }
})


let Quotes = mongoose.model('Quote', quotesSchema)

module.exports = Quotes;