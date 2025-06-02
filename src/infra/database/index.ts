import { Sequelize } from "sequelize";


const sequelize = new Sequelize(
    process.env.POSTGRE_DB || 'nodejs_typescript_kit',
    process.env.POSTGRE_USER || 'postgres',
    process.env.POSTGRE_PASSWORD || 'cempakamasp23',
    {
        dialect: 'postgres',
        host: process.env.POSTGRE_HOST || 'localhost',
        port: parseInt(process.env.POSTGRE_PORT || '5432'),
    },
)

export default sequelize