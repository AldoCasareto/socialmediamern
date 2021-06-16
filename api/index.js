import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log('connected to MongoDB'))
  .catch((error) => console.log(error));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
