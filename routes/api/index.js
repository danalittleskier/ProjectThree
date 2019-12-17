const router = require("express").Router();
const skiRoutes = require("./skis");
const detailSkiRoutes = require("./ski");
const geocode = require("./geocode");
const jwt = require('jsonwebtoken');

// api routes
router.use("/ski", detailSkiRoutes);
router.use("/skis", skiRoutes);
router.use("/geocode", geocode);

// router.use((req, res, next) => {
//   console.log(req.headers);
//     const token = (
//       req.headers.authorization && req.headers.authorization.split(' ')[1]
//     ); 
//     console.log(token);
//     if (!token) {
//       res.status(400).json({ err: true, msg: 'No token provided.' });
//       //res.json({ err: true, msg: 'No token provided.' });
//     } else {
//       jwt.verify(token, process.env.SECRET, (err, decoded) => {
//         if (err) {
//           res.send("Testing", err);
//           //res.status(400).json({ err: true, msg: `Invalid token: ${err.toString()}` });
//         } else {
//           req.decoded = decoded;
//           next();
//         }
//       });
//     }
//   });


module.exports = router;
