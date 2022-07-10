const express = require('express');
const app = express();
const port =3000;
const sequalizeDB = require('./util/sequelize-db');
const user = require('./routes/user');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', user);
sequalizeDB.authenticate()
  .then((data) => {
    console.log('connected to db')
    sequalizeDB.sync();
  })
  .catch((err)=>console.log(err));

app.listen(port,()=>{
  console.log("node server launched at port: "+ port);
})