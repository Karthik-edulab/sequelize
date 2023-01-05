const express = require('express');
const { Sequelize } = require('sequelize');
const User = require('./models/user')
const port = 5000;
const app = express();


app.get('/', (req, res) => {
    res.send("Hello")
});

User.sync({ force: true });

app.listen({ port }, () => {
    console.log("Running on port ", { port })
})
