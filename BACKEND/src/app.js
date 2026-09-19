const express = require('express');
const cors = require('cors');
const { clerkMiddleware } = require ('@clerk/express');
const { serve } = require('inngest/express');
const {inngest , functions} = require('./inngest/index.js');





const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());


//Routes
app.get('/', (req, res) => {
    res.send('Server is live');
});

app.use('/api/inngest', serve({ client: inngest, functions }))






module.exports = app;