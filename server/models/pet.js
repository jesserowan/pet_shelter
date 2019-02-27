const  mongoose = require('mongoose'),
uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Pet name is required'],
    minlength: [3, 'Pet name must be at least 3 characters'],
  },
  species: {
    type: String,
    required: [true, 'Pet type is required'],
    minlength: [3, 'Pet type must be at least 3 characters']
  },
  description: {
    type: String,
    required: [true, 'Pet description is required'],
    minlength: [3, 'Pet description must be at least 3 characters']
  },
  skills: [String],
  likes: {
    type: Number,
    default: 0
  }
}, {timestamps: true});

// PetSchema.plugin(uniqueValidator, {message: 'This pet name already exists in the database'});
mongoose.model("Pet", PetSchema);