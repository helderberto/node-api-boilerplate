import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import compression from 'compression'
import routes from './routes'

class App {
  constructor() {
    this.server = express()

    this.setup()
    this.middlewares()
    this.routes()
  }

  setup() {
    this.server.set('port', process.env.PORT || 3000)
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(express.urlencoded({ extended: false }))
    this.server.use(express.json())
    this.server.use(logger('dev'))
    this.server.use(compression())
    this.server.use(routes)
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server
