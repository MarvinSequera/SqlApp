require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./configs/mySql.config')
const app =express()
const AllEmployees= 'SELECT * FROM employee'
app.use(cors())

app.get('/' ,(req,res)=>{
    
})

app.listen(process.env.PORT,() =>{
    console.log(`conectado el servidor en el puerto ${process.env.PORT}`)
})