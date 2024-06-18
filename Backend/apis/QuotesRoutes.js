const express = require('express');
const Quotes = require('../models/Quote');
const router = express.Router();


router.get('/allquotes',async (req, res)=>{
    try{
      let allQuotes = await Quotes.find({});
      res.status(200).json(allQuotes);
    }
    catch(e){
        res.status(400).json({msg:"something went wrong..."});
    }
})

router.post('/addquotes',async (req,res)=>{
    try{
      let {img, author, age, text} =  req.body;
     let newQuote =  await Quotes.create({img, author, age, text});
     console.log(newQuote, "newQuote");
     res.status(201).json({msg:"New quote created successfully"});
    }
    catch(e){
        res.status(400).json({msg:"something went wrong while creating..."});
    }
})

router.get('/quotes/:id',async (req,res)=>{
  try{
    let quote = await Quotes.findById(req.params.id);
    res.status(200).json(quote);
  }
  catch(e){
    res.status(400).json({msg:"something went wrong while creating..."});
}
})

module.exports = router;