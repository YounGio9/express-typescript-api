import { cleanEnv, port, str } from 'envalid'

function validateEnv(): void {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ['development', 'production'],
        }),
        PORT: port({ default: 8000 }),
        DATABASE_URL: str(),
    })
}

export default validateEnv
