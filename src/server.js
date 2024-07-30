import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import {
  getAllContacts,
  getContactById,
} from './controllers/contactController';

const app = express();

const setupServer = () => {
  app.use(cors());
  app.use(pino());
  app.get('/contacts', getAllContacts);
  app.get('/contacts/:contactId', getContactById);

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found!' });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running the port ${PORT}`);
  });
};

export default setupServer;
