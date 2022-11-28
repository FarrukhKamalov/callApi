const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./utils/database');
const ThemeFreeRouter = require('./router/themeFree.router');
const ThemePremiumRouter = require("./router/themePremium.router");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors('*'));
app.use(morgan("dev"));
connectDB();

app.use('/api/free', ThemeFreeRouter);
app.use('/api/premium', ThemePremiumRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`${PORT} SERVER LISTENING`);
})