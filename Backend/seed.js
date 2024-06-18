const mongoose = require('mongoose');
const Quotes = require('./models/Quote');

let dummyArray = [
    {   img:"https://wallpapers.com/images/high/bill-gates-smile-vaga2ec95vycqimt.webp",
        author:"Bill Gates",
        age: 68,
        text:"“I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it.”"
    },
    {   img:"https://media.gettyimages.com/id/113494481/photo/oscar-fingal-oflahertie-wills-wilde-was-an-irish-writer-poet-and-prominent-aesthete-photograph.jpg?s=612x612&w=0&k=20&c=DU422vhm-jXNCT4IbGZ9-_4r9JRueyBWdp3W4Ly6RL4=",
        author:"Oscar Wilde",
        age:35,
        text:"“The best way to appreciate your job is to imagine yourself without one.”"
    },
     {   img:"https://media.gettyimages.com/id/517357424/photo/samuel-langhorne-clemens-1835-1910-american-author.jpg?s=612x612&w=0&k=20&c=HSW7M8v0X3JC9w6QQWx_p6PUok8KErc2MWABa4E3t6U=https://media.gettyimages.com/id/517357424/photo/samuel-langhorne-clemens-1835-1910-american-author.jpg?s=612x612&w=0&k=20&c=HSW7M8v0X3JC9w6QQWx_p6PUok8KErc2MWABa4E3t6U=",
        author:"Mark Twain",
        age:60,
        text:"“Never put off till tomorrow what you can do the day after tomorrow just as well.”"
    },
    
]

async function seedDB(){
  await  Quotes.insertMany(dummyArray);
  console.log("seed done");
}

module.exports = seedDB;