import { cleanEnv, port, str } from 'envalid'

function validateEnv(): void {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ['development', 'production'],
        }),
        PORT: port({ default: DEFAULT_ENV.PORT }),
        DATABASE_URL: str(),
    })
}

export const DEFAULT_ENV = {
    PORT: 8000,
}

export default validateEnv
