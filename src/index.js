require('dotenv').config()
const express = require('express')


const app = express()

app.use(express.json());

app.get('/', (req, res)=>{
    return res.json('Api está ok')
})

app.listen(3000, ()=>{
    console.log(process.env.PORT)
})