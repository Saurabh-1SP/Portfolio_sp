import express from 'express';
import mongoose from 'mongoose';
// import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import cors from 'cors'

import postRoutes from './routes/post.js'
import skillRoutes from './routes/skill.js'
import messageRoute from './routes/message.js'

const app = express();

// app.use(bodyParser.json({limit: '30mb',extended: true}))
// app.use(bodyParser.urlencoded({limit: '30mb',extended: true}))
app.use(cors());
app.use(express.json({limit: '50mb'}));
dotenv.config()

// app.use('/api/v1/posts',postRoutes)
// app.use('/api/v1/skills',skillRoutes)
app.use('/message',messageRoute)
app.use('/skills',skillRoutes)
app.use('/projects',postRoutes)

// app.get('/api/v1/posts', async (req,res)=>{
//     res.send('Hello world')
// })

const ConnectionUrl = process.env.MONGODB_CLIENT_KEY

mongoose.connect( ConnectionUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(8080, () => console.log(`server running on port: 8080`)))
    .catch((error)=> console.log(error));