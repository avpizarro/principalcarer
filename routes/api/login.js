const jwt = require("jsonwebtoken");


const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

// router.post('/post', (req, res) => {
//     res.json({
//         message: 'Post created...'
//     });
// });

router.post('/post', (req, res) => {

  // mock user
  const user = {
    id : 1,
    username: "alex",
    email: 'alex@example.com'
  };

  // get token
   jwt.sign({user: user}, 'secretkey', ( err, token ) => {
     res.json({
       token
     });
   });
});


module.exports = router;
