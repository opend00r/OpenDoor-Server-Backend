const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const door = express()
door.use(bodyParser.urlencoded({extended: true}))
door.use(bodyParser.json())
door.use(cors())

const { database } = './modules/db.js' 

console.log(database)

door.post('/login', async (req, res)=>{
    console.log(req)
    res.status(200).json('all good here')
})

door.get('/key', async(req,res)=>{

})



const server = door.listen(8888, ()=>{
    console.log('Door Backend Is listening on 8888')
})


