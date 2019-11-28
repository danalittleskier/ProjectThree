const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Skis collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/skiimatik"
);

const skiSeed = [
  {
    brand: "Blizzard",
    model: "COCHISE",
    image: `https://www.blizzardsports.com/files/10255/c-fit-w-2032-q-auto-eco8A909200001_COCHISE-FLAT.png`,
    category: "All Mountain Freeride",
    snow_recommendation: "Powder",
    turns_recommendation: "Large",
    pace_recommendation: "Fast",
    gender: "Men",
    width: 108,
    length: 185,
    radius: 27,
    tip: 136,
    tail: 122,
    description:
      `Cochise fans worldwide are raving about the ease and performance of this 108mm big mountain stomper. 
      Carbon Flipcore combined with camber under foot and a slightly shorter radius sets the standard for 
      precision and stability while 2 sheets of metal, a wood core and vertical sidewalls ramp up the performance 
      in any condition. Add in a higher profile tip with a progressive tip and tail taper, and the soft snow capability 
      can't be beat. Versatile is an understatement - see for yourself!`
  },
  {
    brand: "Blizzard",
    model: "BONAFIDE",
    image: `https://www.blizzardsports.com/files/11576/c-fit-w-2032-q-auto-eco8A909400001_BONAFIDE-FLAT.png`,
    category: "All Mountain Freeride",
    snow_recommendation: "Groomed",
    turns_recommendation: "Large",
    pace_recommendation: "Fast",
    gender: "Men",
    width: 98,
    length: 180,
    radius: 18,
    tip: 135,
    tail: 119,
    description:
      `The legendary Bonafide continues to set the bar in the all-mountain freeride world. 
      A versatile all-mountain sidecut and reduced rocker profile makes this ski nimble and easy 
      handling, while the proven Carbon Flipcore™ with two sheets of Titinal makes them calm, 
      confident and powerful. Attack the mountain in powder, crud, groomers or rock hard snow 
      and feel the precision and exhilaration that athletes and testers rave about. 
      Try for yourself to see what the hype is all about. You won't regret it.`
  },
  {
    brand: "Blizzard",
    model: "BRAHMA",
    image: `https://www.blizzardsports.com/files/10233/c-fit-w-2032-q-auto-eco8A909600001_BRAHMA-88-FLAT.png`,
    category: "All Mountain Freeride",
    snow_recommendation: "Groomed",
    turns_recommendation: "Medium",
    pace_recommendation: "Moderate",
    gender: "Men",
    width: 88,
    length: 180,
    radius: 19,
    tip: 127,
    tail: 111,
    description:
      `The Brahma 88 is the go-to all-mountain ski on days when the cold temps and dry spells make for firm snow conditions. 
      A versatile all-mountain sidecut and reduced rocker profile make them easier to ski, while the proven Carbon Flipcore 
      Technology with two sheets of metal smooths the ride, grips hard snow and blasts through crud. At 88mm underfoot, 
      the super versatile Brahma puts the fun into every type of snow condition and terrain the mountain has to offer. 
      The Brahma is your ticket to truly own the mountain.`
  },
  {
    brand: "Blizzard",
    model: "RUSTLER 11",
    image: `https://www.blizzardsports.com/files/10244/c-fit-w-2032-q-auto-eco8A910800001_RUSTLER-11-FLAT.png`,
    category: "Freeride",
    snow_recommendation: "Groomed",
    turns_recommendation: "Medium",
    pace_recommendation: "Moderate",
    gender: "Men",
    width: 88,
    length: 180,
    radius: 19,
    tip: 127,
    tail: 111,
    description:
      `The Brahma 88 is the go-to all-mountain ski on days when the cold temps and dry spells make for firm snow conditions. 
      A versatile all-mountain sidecut and reduced rocker profile make them easier to ski, while the proven Carbon Flipcore 
      Technology with two sheets of metal smooths the ride, grips hard snow and blasts through crud. At 88mm underfoot, 
      the super versatile Brahma puts the fun into every type of snow condition and terrain the mountain has to offer. 
      The Brahma is your ticket to truly own the mountain.`
  }
];

db.Ski
  .remove({})
  .then(() => db.Ski.collection.insertMany(skiSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
