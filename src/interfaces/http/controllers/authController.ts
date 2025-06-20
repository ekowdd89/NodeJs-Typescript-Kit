import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { UserService } from '../../../app/userService';
import { Request, Response } from 'express';


@injectable()
export class AuthController {
    constructor(
       @inject(UserService) private userService: UserService
    ){}

    getUsers = async (_req: Request, res: Response) => {
        const users = await this.userService.findAllUsers(
            Number(_req.query.page),
            Number(_req.query.limit)
        )
        res.json(users)
    }
}