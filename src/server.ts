import 'module-alias/register'
import 'dotenv/config'
import validateEnv, { DEFAULT_ENV } from '@utils/validateEnv'
import App from './app'

validateEnv()

const app = new App([], Number(process.env.PORT ?? DEFAULT_ENV.PORT))
app.listen()
