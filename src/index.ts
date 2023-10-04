import express from 'express'
import { criminosoRoutes } from './routes/criminoso.routes'
import { armaRoutes } from './routes/arma.routes'
import { crimeRoutes } from './routes/crime.routes'
const app = express()

app.use(express.json())

const port = process.env.PORT


app.use('/criminoso', criminosoRoutes())

app.use('/arma', armaRoutes())

app.use('/crime', crimeRoutes())

app.listen(port, ()=>console.log(`Server running at port: ${3333}`))