
import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import sequelize from './infra/database';
import { userRouter } from './interfaces/http/router';
dotenv.config({ path: '../.env' });

const app = express();
app.get('/healthcheck', (_req: Request, res: Response) => {
    res.json({
        status: 'ok'
    })
})
console.log(process.env)
app.use('/api', userRouter);

(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true});
        console.log('Database synced');
        app.listen(3000, () => console.log('Server running on port 3000'));
    }catch(err){
        console.log(err)
    }
})();