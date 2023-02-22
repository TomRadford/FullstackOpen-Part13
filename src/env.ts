
import z from 'zod'
import dotEnv from 'dotenv'
dotEnv.config()
const serverSchema = z.object({
	PORT: z.string().length(4),
	DATABASE_URL: z.string()
})

const serverEnv = {
	PORT: process.env.PORT,
	DATABASE_URL: process.env.DATABASE_URL
}

const _serverEnv = serverSchema.safeParse(serverEnv)

if (!_serverEnv.success) {
	throw new Error('Invalid environment variables!')
}

export default {
	..._serverEnv.data
}