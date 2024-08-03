const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    // Connect to MongoDB
    const connection = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, 
      useFindAndModify: false 
    });
    console.log(`MongoDB connected with server: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDatabase;
