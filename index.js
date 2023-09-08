const mongoose = require("mongoose")
const app = require('./app')
const {DB_HOST, USERNAME, PASSWORD , HOST, PORT, API_PATH} = require('./variables')

const connection_string = `mongodb+srv://${USERNAME}:${PASSWORD}@${DB_HOST}/`
console.log(`http://${HOST}:${PORT}/${API_PATH}`);

mongoose
    .connect(connection_string, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() =>{
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Active port ${PORT}`));
    })
    .catch((err)=>console.error(err))
