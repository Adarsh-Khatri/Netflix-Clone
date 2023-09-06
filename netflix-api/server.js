import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import { connection } from "./database/connection.js";
import userRoutes from './routes/UserRoutes.js';

const app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());


app.use("/api/user", userRoutes);


const finalConnection = async () => {
  try {
    await connection();
    const PORT = 5000;
    app.listen(PORT, () => console.log(`Server Connected To http://localhost:${PORT}`))
  } catch (error) {
    console.log('Error While Connecting To Server', error);
  }
}


finalConnection();
