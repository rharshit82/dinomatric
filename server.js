import express from 'express'
import apiRoutes from './routes/apiRoutes.js'
import dotenv from 'dotenv'

// import path, { dirname } from 'path'
// import { fileURLToPath } from 'url'
//Initialising dotenv
dotenv.config()
//Initialising database

//Initialising Express
const app = express()
app.use(express.json())


//Basic Routes
app.use('/api', apiRoutes)


// const __dirname = dirname(fileURLToPath(import.meta.url))

// app.use(express.static(path.resolve(__dirname, 'client', 'build')))

// app.get('/', function (req, res) {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// })
const PORT = process.env.PORT
app.listen(PORT || 5000, () => console.log('Server Running'))
