const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Skis collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/skiimatik"
);

// mongoose.connect(
//   "mongodb+srv://gerritt:gerritt@planet-of-scrapes-wmmte.mongodb.net/skitest?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );


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
    snow_recommendation: "Crud",
    turns_recommendation: "Large",
    pace_recommendation: "Fast",
    gender: "Men",
    width: 114,
    length: 188,
    radius: 21,
    tip: 142,
    tail: 132,
    description:
      `The Rustler 11 will leave you grinning all day long. It is founded on two signature concepts, 
      Carbon Flipcore D.R.T Technology and an innovative waist concept: the longer the ski, 
      the wider the waist which gives ambitious freeriders and freeride athletes more control and float, 
      even on steep terrain. The smooth rocker-camber-rocker profile make it responsive and stable yet super 
      playful in softer snow and powder conditions and on any type of terrain. The Rustler 11 is the ultimate resort powder ski.`
  },
  {
    brand: "Blizzard",
    model: "RUSTLER 10",
    image: `https://www.blizzardsports.com/files/10239/c-fit-w-2032-q-auto-eco8A910900001_RUSTLER-10-FLAT.png`,
    category: "Freeride",
    snow_recommendation: "Groomed",
    turns_recommendation: "Medium",
    pace_recommendation: "Fast",
    gender: "Men",
    width: 102,
    length: 180,
    radius: 18,
    tip: 133,
    tail: 122,
    description:
      `The Rustler 10 will help you push the limits. It is founded on two signature concepts, 
      Carbon Flipcore D.R.T Technology and an innovative waist concept: the longer the ski, 
      the wider the waist which gives ambitious freeriders and all mountain skiers more 
      versatility and float, even on steep terrain. The smooth rocker-camber-rocker profile 
      make it responsive and stable yet super playful in softer snow conditions and on any 
      type of terrain. The Rustler 10 is the one-ski quiver for the progressive freeride skier.`
  },
  {
    brand: "Blizzard",
    model: "ZERO G 095",
    image: `https://www.blizzardsports.com/files/10241/c-fit-w-2032-q-auto-eco8A914200001_ZERO-G-095-FLAT.png`,
    category: "Touring",
    snow_recommendation: "Crud",
    turns_recommendation: "Medium",
    pace_recommendation: "Moderate",
    gender: "Men",
    width: 95,
    length: 180,
    radius: 23,
    tip: 127,
    tail: 111,
    description:
      `You may not have skiing a Himalayan couloir on your bucket list, but if you did the Zero G 95 would be a good choice – 
      it’s what Hilaree Nelson and Jim Morrison slayed the Lhotse Couloir with from 27,940 feet!! 
      The all-new 2019/20 version has been refined to improve your skinning and climbing challenges, 
      while assuring the quality of your descent with newly engineered Carbon Drive 2.0. 
      Maybe your adventure is a little closer to home, but it doesn’t mean you shouldn’t be using the same 
      efficient and fun skis that the pros choose.`
  },
  {
    brand: "Blizzard",
    model: "ZERO G 105",
    image: `https://www.blizzardsports.com/files/10238/c-fit-w-2032-q-auto-eco8A914000001_ZERO-G-105-FLAT.png`,
    category: "Touring",
    snow_recommendation: "Powder",
    turns_recommendation: "Large",
    pace_recommendation: "Fast",
    gender: "Men",
    width: 105,
    length: 180,
    radius: 23,
    tip: 133,
    tail: 119,
    description:
      `If you are searching for the perfect tool to discover the perfect backcountry run, look no more. 
      Blizzard’s 105mm waisted Zero G offering for 2019/20 feels at home in the skin track, and then really 
      shows its colors after you pull skins and transition into reward mode for the payoff. 
      Our engineers, who personally test prototypes in the Austrian Alps, have been on the same search as you. 
      They are proud to supply Carbon Drive 2.0 and a customized shape for the true freeride backcountry adventure.`
  },
  {
    brand: "Blizzard",
    model: "ALIGHT 8.2 TI+TPX 12 DEMO W",
    image: `https://www.blizzardsports.com/files/10202/c-fit-w-2032-q-auto-eco8A9074AE001_ALIGHT-8.2-TI-_-TPX-12-DEMO-W.png`,
    category: "All Mountain",
    snow_recommendation: "Groomed",
    turns_recommendation: "Short",
    pace_recommendation: "Slow",
    gender: "Women",
    width: 82,
    length: 162,
    radius: 13,
    tip: 126,
    tail: 108,
    description:
      `Blizzard’s Alight 8.2 Ti is a women’s all-mountain frontside ski that tackles ice, groomers and variable 
      snow with the same ease and sense of fun. Utlizing women's specific molds to access the sweet spot of the ski, 
      an 82 mm waist with 4 mm rocker all combine to offer superior edge grip with a steady ride. 
      A Titanal laminate gives this ski torsional stiffness and transfers your power directly onto the piste.`
  },
  {
    brand: "Blizzard",
    model: "BLACK PEARL 98",
    image: `https://www.blizzardsports.com/files/10251/c-fit-w-2032-q-auto-eco8A913400001_BLACK-PEARL-98-FLAT.png`,
    category: "All Mountain Freeride",
    snow_recommendation: "Groomed",
    turns_recommendation: "Medium",
    pace_recommendation: "Moderate",
    gender: "Women",
    width: 98,
    length: 173,
    radius: 15,
    tip: 135,
    tail: 119,
    description:
      `If you are looking for a ski that can float through powder, bust through chopped up crud or carve on the groomers, 
      the Black Pearl 98 is the ski for you. With a 98 mm waist and a women's specific Carbon Flipcore W.S.D. 
      construction, the Black Pearl 98 is light and easy with exceptional versatility and performance for any terrain or snow condition you can throw at it.`
  },
  {
    brand: "Blizzard",
    model: "BLACK PEARL 88",
    image: `https://www.blizzardsports.com/files/10236/c-fit-w-2032-q-auto-eco8A913600001_BLACK-PEARL-88-FLAT.png`,
    category: "All Mountain Freeride",
    snow_recommendation: "Groomed",
    turns_recommendation: "Medium",
    pace_recommendation: "Moderate",
    gender: "Women",
    width: 88,
    length: 173,
    radius: 16,
    tip: 127,
    tail: 111,
    description:
      `As the world's best selling women's ski, the Black Pearl 88 shines as the versatile, 
      all-around ski offering the ultimate ride through all types of terrain. With an 88 mm waist, and a women's specific Carbon Flipcore W.S.D. construction, 
      the Black Pearl 88 performs on groomers, in the trees, through bumps and in powder. Its lightweight construction, early rise tip and tail, and 
      camber underfoot make this ski a go-to for ripping female skiers as well as those looking for the confidence to up their game.`
  },

  {
    brand: "Blizzard",
    model: "SHEEVA 11",
    image: `https://www.blizzardsports.com/files/10249/c-fit-w-2032-q-auto-eco8A913000001_SHEEVA-11-FLAT.png`,
    category: "Freeride",
    snow_recommendation: "Crud",
    turns_recommendation: "Large",
    pace_recommendation: "Fast",
    gender: "Women",
    width: 112,
    length: 180,
    radius: 19,
    tip: 140,
    tail: 130,
    description:
      `Light and playful, yet stable and confidence inspiring, the Sheeva 11, with Carbon Flipcore D.R.T Technology, 
      a women's specific design and a progressive shape and rocker profile, is the answer for lady shredders of all 
      types seeking the ultimate powder ski. 
      Ski better and have more fun while seeking out those special, pristine untracked stashes on the mountain.`
  },
  {
    brand: "Blizzard",
    model: "SHEEVA 10",
    image: `https://www.blizzardsports.com/files/10246/c-fit-w-2032-q-auto-eco8A911100001_SHEEVA-10-FLAT.png`,
    category: "Freeride",
    snow_recommendation: "Crud",
    turns_recommendation: "Medium",
    pace_recommendation: "Fast",
    gender: "Women",
    width: 102,
    length: 180,
    radius: 17,
    tip: 133,
    tail: 122,
    description:
      `The Sheeva 10 is fun and forgiving while offering up stability and versatility. 
      From pow to packed pow and anything in between, this ski will make any turn shape 
      at any speed in any terrain effortless. Carbon Flipcore D.R.T. and W.S.D. – 
      Women’s Specific Design - construction combine to deliver a confidence inspiring, elevated skiing experience. 
      Why work hard when you can play harder?`
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
