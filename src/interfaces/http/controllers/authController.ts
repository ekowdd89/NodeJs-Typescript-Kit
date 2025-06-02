import { UserService } from '../../../app/userService';
import { Request, Response } from 'express';

export class AuthController {
    constructor(
        private userService : UserService
    ){}

    static instanceAuthController(userService : UserService){
        return new this(userService)
    }

    getUsers = async (_req: Request, res: Response) => {
        const users = await this.userService.findAllUsers(
            Number(_req.query.page),
            Number(_req.query.limit)
        )
        res.json(users)
    }
}