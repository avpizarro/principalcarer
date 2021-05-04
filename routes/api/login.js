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

router.post("/post", (req, res) => {
  // mock user
  const user = {
    id: 1,
    username: "alex",
    email: "alex@example.com",
  };

  // get token
  jwt.sign({ user: user }, "secretkey", (err, token) => {
    res.json({
      token,
    });
  });
});

router.post("/post/check", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created...",
        authData,
      });
    }
  });
});

// Check post jwt.verify is working
router.post("/postmed", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.json({
        message: "You can't add a medication for Nina"
      });
    } else {
      res.json({
        message: "You can add a medication for Nina",
        authData,
      });
      // Medication.create(req.body)
      //   .then((medication) => res.json(medication))
      //   .catch((err) => res.status(404).json({ success: false }));
    }
  });
});

// Verify Token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

(module.exports = router), verifyToken;
