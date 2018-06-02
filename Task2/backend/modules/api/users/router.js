const express = require("express");
const router = express.Router();

const userController = require("./controller");



router.get("/",(req,res)=>{
  userController
  .getAllUser()
  .then(data => res.send(data))
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
})

router.get("/:id", (req, res) => {
  userController
    .getUser(req.params.id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.post("/",(req,res) =>{
    userController
      .createUser(req.body)
      .then(data => res.send(data))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      })
});

router.post("/:id",(req,res)=>{
    userController
    .updateUser(req.params.id,req.body)
    .then(result => res.send(result))
    .catch(err => {
        console.error(err);
        res.status(500).send(err);
      })
    }
)



  module.exports = router;