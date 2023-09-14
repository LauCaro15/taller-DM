const mongoose = require("mongoose")
const app = require('./app')
const dotenv = require('dotenv').config()

/* const {DB_HOST, USERNAME, PASSWORD , HOST, PORT, API_PATH} = require('./variables') */

const connection_string = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@${process.env.DB_HOST}/`
console.log(`http://${process.env.HOST}:${process.env.PORT}/${process.env.API_PATH}`);

mongoose
    .connect(connection_string, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() =>{
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => console.log(`Active port ${process.env.PORT}`));
    })
    .catch((err)=>console.error(err))
