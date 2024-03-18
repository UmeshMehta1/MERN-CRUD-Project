//db.js

const mongoose = require('mongoose')

const url = "mongodb+srv://mehtaumesh1245:meht@umesh1245@cluster11.hsojf83.mongodb.net/?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })