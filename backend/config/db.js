const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://luckyvishwakarmawebsite:lucky%401011@cluster0.kk0n5gk.mongodb.net/flipr_assignment?retryWrites=true&w=majority');
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
