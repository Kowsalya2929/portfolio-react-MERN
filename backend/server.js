import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import connectDB from './config/connectDB.js'
import contactRoute from './routes/contactRoute.js'
import cors from 'cors'
import projRoute from './routes/projRoute.js'

dotenv.config()

const __dirname = path.resolve()

const app = express()
connectDB()

app.use(express.json())
app.use(cors({
    origin: 'https://portfolio-react-bspc.onrender.com',
    credentials: true
}));

app.use('/api/contact',contactRoute)
app.use('/api/project',projRoute)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,'/frontend/build')))
}

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port : ${process.env.PORT}`)
})