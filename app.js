const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');
const {mongoDbUrl} = require('./config/config');
const {PORT} = require('./config/config');



const app = express();

//Configure Mongoose to connect to  Mongodb
mongoose.connect(mongoDbUrl, { useNewUrlParser: true })
    .then(response => {
        console.log("MongoDB connected successfully.");
    }).catch(err => {
        console.log("Database Connection failed.");
    });

//Configure Express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//Setup View engine to use handlebars
app.engine('handlebars', hbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');


//Routes
const defaultRoutes = require('./routes/defaultRoutes');
app.get('/', defaultRoutes);


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});



//Code to get a free port
// const app = require('express')();
// const server = app.listen(0, () => {
//   console.log('Listening on port:', server.address().port);
// });
