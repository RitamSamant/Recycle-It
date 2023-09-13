import express, { Application,Request,Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import client from './routes/clientRoutes'
import org from './routes/orgRoutes'
import user from './routes/userRoute'
dotenv.config()
const app : Application = express()
const PORT : any = process.env.PORT || 8000

app.get('/',(req:Request,res:Response)=>{
    res.status(200).json('Working fine in Typescript')
})

app.use(cors())
app.use(express.json())
app.use('/client',client)
app.use('/org',org)
app.use('/user',user)

const MONGO_URI : any = process.env.MONGO_URI

mongoose.connect(MONGO_URI,{
    dbName : "waste-management"
}).then(():void=>{console.log(`MongoDB connected 😎`)
}).catch((err):void=>{console.log(err)
})

app.listen(PORT,():void=>{
    console.log(`Server listening at ${PORT}`)
})
