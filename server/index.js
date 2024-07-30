const express = require('express')
const router = require('./routes/index')
const cors = require('cors')
require('dotenv').config({ path: '.env.local' })
const connectDB = require('./config/connectDB')

const app = express()

app.use(express.json())
app.use('/api', router)
app.use(cors({
    origin: '*',
}))

app.get('/', (req,res)=>{
    res.json({
        message: "첫 페이지입니다."
    })
})

connectDB().then(()=>{
    app.listen(8080, ()=>{
        console.log(`웹서버가 실행되었습니다.`)
    })
})
