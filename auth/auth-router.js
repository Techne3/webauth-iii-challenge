const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const Users = require('../users/users-model')




router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

  
  router.post("/login", (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          // 2: produce a token
          const token = getJwtToken(user.username);
  
          // 3: send the token to the client
          res.status(200).json({
            message: `Welcome ${user.username}! You have a token...`,
            token
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });



  router.get('/logout', (req,res)=> {
    if(jwt){
      jwt.destroy(error => {
        res.status(200).json({message: 'logged out successfully '})
        if(error ){
          res.status(500).json({message: 'you can check  out any time you like, but you can never leave'})
        }
      });
  
    }else{
      res.status(200).json({Message: 'thanks for playing'})
    }
  })

 // 4
  function getJwtToken(username) {
    const payload = {
      username,
      role: "student" // this will probably come from the database
    };
  
    const secret = process.env.JWT_SECRET || "is it secret, is it safe?";
  
    const options = {
      expiresIn: "1d"
    };
  
    return jwt.sign(payload, secret, options);
  }

module.exports = router