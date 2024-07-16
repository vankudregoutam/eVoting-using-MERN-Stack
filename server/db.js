const mongoose = require('mongoose');
const mongoURI = process.env.REACT_APP_MERN_API

const  connectToMongo = () => {
    mongoose.connect(mongoURI)
    const db = mongoose.connection;
    db.on('error', (error) => {
        console.error('Mongo connection error: ', error);
    });
    db.once('open', () => {
        console.log('Connected to Mongo');
    })
}

module.exports = connectToMongo;
