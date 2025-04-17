import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import connectDB from './config/connectDB.js'
import contactRoute from './routes/contactRoute.js'
import cors from 'cors'

dotenv.config()

const __dirname = path.resolve()

const app = express()
connectDB()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST',            
    allowedHeaders: 'Content-Type'  
}));
app.use('/api/contact',contactRoute)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,'/frontend/build')))
}

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port : ${process.env.PORT}`)
})