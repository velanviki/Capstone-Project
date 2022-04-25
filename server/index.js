import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/users.js'

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/user',userRoutes);

app.use('/',(req,res) => {
    res.send("Hello world");
});

const PORT = process.env.PORT || 4000;
const CONNECTION_URL ="mongodb+srv://velan:Velandb321@cluster0.detsh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

 mongoose. connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(process.env.PORT||PORT, () => console.log(`Server Running on Port: ${PORT}`)))
.catch((error) => console.log( error.message));

