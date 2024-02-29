import express from 'express';
import {config} from 'dotenv';
import authRoutes from './routes/auth-routes.js';
import messageRoutes from './routes/message-routes.js';
import userRoutes from './routes/user-routes.js';
import cors from 'cors';
import connectToDataBase from './database/db-config.js';
import cookieParser from 'cookie-parser';
config();//run the env file

const app = express();
const PORT = process.env.PORT || 5030;

app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

app.use('/',(req,res) => {
    res.status(404).send('Hello World');
});

app.listen(PORT, async () => {
    await connectToDataBase();
    console.log(`Server is running in http://localhost:${PORT}`);
});