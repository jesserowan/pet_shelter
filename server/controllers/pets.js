const mongoose = require('mongoose'),
           Pet = mongoose.model("Pet");

class Pets {
  getAll (req, res) {
    Pet.find({}, (err, pets) => {
      if (err) {
        res.json({status: "not ok", errors: err});
      } else {
        res.json({status: "ok", pets: pets});
      }
    })
  }

  getOne (req, res) {
    Pet.findOne({_id: req.params._id}, (err, pet) => {
      if (err) {
        res.json({status: "not ok", errors: err});
      } else {
        res.json({status: "ok", pet: pet});
      }
    })
  }

  create (req, res) {
    let pet = new Pet(req.body);
    pet.save( err => {
      if (err) {
        res.json({status: "not ok", errors: err});
      } else {
        res.json({status: "ok"});
      }
    })
  }

  update (req, res) {
    Pet.findOneAndUpdate({_id: req.params._id}, req.body, { runValidators: true }, err => {
      if (err) {
        res.json({status: "not ok", errors: err});
      } else {
        res.json({status: "ok"});
      }
    })
  }

  like (req, res) {
    Pet.findOneAndUpdate({_id: req.params._id}, req.body, err => {
      if (err) {
        res.json({status: "not ok", errors: err});
      } else {
        res.json({status: "ok"});
      }
    })
  }

  delete (req, res) {
    Pet.findOneAndRemove({_id: req.params._id}, err => {
      if (err) {
        res.json({status: "not ok", errors: err});
      } else {
        res.json({status: "ok"});
      }
    })
  }
}

module.exports = new Pets();