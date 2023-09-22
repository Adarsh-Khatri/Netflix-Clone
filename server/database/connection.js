import mongoose from 'mongoose';

export const connection = async () => {
  try {
    await mongoose.connect("mongodb+srv://adarshkhatri392:7xcWaVikbF2GJ6BE@cluster1.iyxgepi.mongodb.net/netflix", { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Successfully Connected To Database');
  } catch (error) {
    console.log('Server Encountered An Error While Connecting To Database: ', error.message);
  }
}
