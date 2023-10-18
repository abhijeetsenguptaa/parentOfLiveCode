const express = require('express');
const connection = require('./configs/connection');
const userRouter = require('./routes/user.routes');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        return res.status(200).json({
            status: true,
            message: 'Welcome to Live Coding test'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error'
        });
    }
});

app.use('/users', userRouter);

app.listen(8080, async () => {
    try {
        await connection;
        console.log('Server is connected to the DB');
    } catch {
        console.log('Error');
    }
    console.log('Server is running on port 8080.');
});
