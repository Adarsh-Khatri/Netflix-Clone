import mongoose from 'mongoose';

export const connection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/netflix', { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Successfully Connected To Database');
  } catch (error) {
    console.log('Server Encountered An Error While Connecting To Database: ', error.message);
  }
}
