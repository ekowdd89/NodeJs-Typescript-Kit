import 'reflect-metadata';
import { injectable } from "tsyringe";
import User from "../../infra/database/models/userModel";

export interface IUserRepository {
    findUserByEmail(email: string): Promise<User | null>
    createUser(dto: User): Promise<User>
    findAllUsers(page: number, limit: number): Promise<User[]>
}


@injectable()
export class UserRepository implements IUserRepository {
    findUserByEmail(email: string): Promise<User | null> {
        return User.findOne({where: {email}})
    }
    createUser(dto: User): Promise<User> {
        return User.create(dto)
    }
    findAllUsers(page: number, limit: number): Promise<User[]> {
        return User.findAll({
            offset: (page - 1) * limit || 0,
            limit: limit || 10
        })
    }
}