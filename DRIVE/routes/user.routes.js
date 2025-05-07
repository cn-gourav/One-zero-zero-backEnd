const express = require("express");
const router = express.Router();
const { body, vaildationResult, validationResult } = require("express-validator");

router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  '/register',
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 5 }),
  body("username").trim().isLength({ min: 3 }),
  (req, res) => {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array(),
            message: 'Invaild data'
        })
    }
 
    // console.log(errors)
    res.send(errors)

    // console.log(req.body);
    // res.send("success");
  }
);

module.exports = router;
