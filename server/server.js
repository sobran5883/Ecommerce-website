const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require('./routes/auth/auth-routes.js')


mongoose.connect('mongodb+srv://sobran0054:9oeCLUvKmevG2yHj@cluster0.yguxq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("MongoDB connected")).catch((error)=>console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders:[
            'Content-Type',
            'Authorization',
            'Cache-control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
)

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);

app.listen(PORT, ()=> console.log(`server is now running on port ${PORT}`));