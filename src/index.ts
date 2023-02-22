
import express, {request} from 'express'
import { CreationOptional, DataTypes, Model } from 'sequelize';
import env from './env';
import { sequelize } from './db';
const app = express()
app.use(express.json())

export class Blog extends Model {
	declare id: CreationOptional<number>;
	declare author: CreationOptional<string>;
	declare url: string;
	declare title: string;
	declare likes: number;
}

Blog.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	author: {
		type: DataTypes.TEXT,
	},
	url: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	likes: {
		type: DataTypes.NUMBER,
		defaultValue: 0
	}
}, {
	sequelize,
	underscored: true,
	timestamps: false,
	modelName:'blog' 
})


app.get('/api/blogs', async (_req, res) => {
	const blogs = await Blog.findAll()
	res.json(blogs)
})

app.post('/api/blogs', async (req, res) => {
	try {
	// could also use .build:
	const newBlog = await Blog.create(req.body) 
	res.json(newBlog)
	res.json 
	} catch (e) {
		res.status(400).json({error: e})
	}
})

app.get('/api/blogs/:id', async (req, res) => {
	try {
		const blog = await Blog.findByPk(req.params.id)
		if (blog) {
			res.json(blog) 
		} else {
			res.status(404).end()
		}
	} catch (e) {
		res.status(400).json({error: e})
	}
})

app.delete('/api/blogs/:id', async (req, res) => {
	try {
		await Blog.destroy({
			where: {
				id: req.params.id
			}
		})
		res.status(204).end()
	} catch (e) 
	{
		res.status(400).json({error: e})
	}
})

app.listen(env.PORT, () => {
	console.log(`Server running on ${env.PORT}`)
})