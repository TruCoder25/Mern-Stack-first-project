const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pratibhavishlavath25:Pratibha%402564@cluster0.1peglzf.mongodb.net/")
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(`Error occurred: ${error}`));
