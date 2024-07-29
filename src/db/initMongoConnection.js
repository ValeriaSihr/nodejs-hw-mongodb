import mongoose from 'mongoose';

const initMongoConnection = async () => {
  try {
    const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } =
      process.env;
    const connectionString = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Mongo connection error', error);
    process.exit(1);
  }
};

export default initMongoConnection;