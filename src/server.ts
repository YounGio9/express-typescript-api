import express, { type Application } from 'express'

const app: Application = express()

app.listen(8001, () => {
    // eslint-disable-next-line no-console
    console.log('Server started')
})
