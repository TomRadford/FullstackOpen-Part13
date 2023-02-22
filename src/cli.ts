import { QueryTypes } from "sequelize"
import { Blog } from "."
import { sequelize } from "./db"


async function main () {
try { 
	console.log('Connecting to DB')
	await sequelize.authenticate()
	const blogs:Blog[] = await sequelize.query("SELECT * from blogs", {type: QueryTypes.SELECT}) 
	blogs.map(blog => {
		console.log(`${blog.author}: '${blog.title}' ${blog.likes} likes`)
	})
	sequelize.close()
} catch (e) {
	console.error('Error authenticating DB: ', e)
} 
}

main()

