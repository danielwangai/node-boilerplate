import bodyParser from 'body-parser'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'

const PORT = process.env.PORT || 5000
const isProduction = process.env.NODE_ENV === 'production'

const app = express()
app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if (isProduction) {
  app.use(cors())
}

app.listen(PORT, () => {
  console.log('Server running on PORT - ', PORT)
})

export default app
