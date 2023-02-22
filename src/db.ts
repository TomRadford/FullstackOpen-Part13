import { Sequelize, Model,  DataTypes, CreationOptional } from 'sequelize'
import env from './env'

export const sequelize = new Sequelize(env.DATABASE_URL, {
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false
		}
	}
})