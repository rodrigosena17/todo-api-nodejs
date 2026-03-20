const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./docs/swagger')

const authRoutes = require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes')

const app = express()


app.use(cors())
app.use(express.json())

app.use('/api', authRoutes)
app.use('/api', taskRoutes)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

module.exports = app
