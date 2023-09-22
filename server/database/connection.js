import mongoose from 'mongoose';

export const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Successfully Connected To Database');
  } catch (error) {
    console.log('Server Encountered An Error While Connecting To Database: ', error.message);
  }
}
