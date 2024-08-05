import { type Router } from 'express'

interface Controller {
    path: string | RegExp
    router: Router
}

export default Controller
