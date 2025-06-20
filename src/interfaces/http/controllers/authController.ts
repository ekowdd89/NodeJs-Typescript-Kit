import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { UserService } from '../../../app/userService';
import { Request, Response } from 'express';
import { UserDto } from '../dtos/user.dto';


@injectable()
export class AuthController {
    constructor(
       @inject(UserService) private userService: UserService
    ){}

    getUsers = async (_req: Request, res: Response) => {
        const users = await this.userService.findAllUsers(
            Number(_req.query.page),
            Number(_req.query.limit)
        );
        const results: UserDto[] = (users ?? []).map(user => ({
            id: Number(user.id),
            name: user.name,
            email: user.email,
            password: user.password
        }));
        res.json(results)
    }
}