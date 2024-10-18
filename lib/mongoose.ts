import mongoose, { ConnectOptions } from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined');
  }

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    const options: ConnectOptions = {
      dbName: 'sibirkoleso',
      autoCreate: true,
    };

    await mongoose.connect(process.env.MONGODB_URI, options);
    isConnected = true;

    console.log('MongoDB connected ✔✔✔✔');
  } catch (error) {
    console.log(
      'MongoDB connection error. Please make sure MongoDB is running. ',
      error
    );
  }
};
