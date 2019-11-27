const express = require("express");
const router = express.Router();


router.get('/ski', (req, res) => res.send('ski route enabled'))



module.exports = router;
