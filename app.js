const express = require('express');
const sequelize = require('./config/db');
const bodyParser = require('body-parser');
const port = 3000;

const Sku = require('./models/Sku');
const Brand = require('./models/Brand')


const skuRouter = require('./routes/sku/sku.index');
const brandRouter = require('./models/Brand')
const app = express();

sequelize
.authenticate()
.then(()=>{
    console.log('connection has been sucessfully established')
    Sku.sync()
    Brand.sync()
})
.catch(err=>{
    console.log('unable to connect',err)
})

app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send('welcome to sku')
})

app.use('/sku', skuRouter)

app.listen(port,()=>{
    console.log(`running on port${port}`)
})