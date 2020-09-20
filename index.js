const express=require('express')
const cors=require('cors')
const configureDB=require('./config/database')
const router = require('./config/routes')
const app=express()

const port=3063

//cors is third party middleware
app.use(cors())
app.use(router)
app.use(express.json())
configureDB()


//handle page reload



app.use((err,req,res,next)=>{
    res.status('500').json({error:err.message})
})
app.listen(port,()=>{
    console.log('listening to server',port)
})