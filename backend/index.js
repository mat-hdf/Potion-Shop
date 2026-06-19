import express from 'express'
import routes from './src/routes/api.routes.js'
import sequelize from './src/config/dbconfig.js'
import cors from 'cors'

const app = express();

async function startServer()
{
    await sequelize.sync()
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(cors())
    app.use(routes)
    app.listen(3000, () => console.log('Servidor iniciado na porta 3000'))
}

startServer()