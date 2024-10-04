const mongoose = require('mongoose');

const mongoUri = 'mongodb+srv://sididiop53:Toubakhayra@cluster0.awijgmu.mongodb.net/Tailor_React_Database?retryWrites=true&w=majority';

const connectToMongoDB = () => {
  mongoose.connect(mongoUri)
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((err) => {
      console.error(`MongoDB connection error: ${err}`);
    });
};

module.exports = connectToMongoDB;
