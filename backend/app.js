const path = require('path');

const bodyParser =require('body-parser');

const express = require('express');


const app = express();

const cors = require('cors')

app.use(cors())

const sequelize = require('./utility/database');


app.use(bodyParser.json({extended : false}))

const adminRoutes = require('./routes/admin');

app.use(adminRoutes);

sequelize.sync()
.then(result =>{
    // console.log(result)
    app.listen(3000)
}).catch(err =>console.log(err))