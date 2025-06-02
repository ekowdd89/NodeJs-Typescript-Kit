import { IUserRepository } from "../domain/repositories/UserRepository";
import User from "../infra/database/models/userModel";

export class UserService {
    constructor(private userRepo: IUserRepository){}
    static instanceUserRepository = (repo: IUserRepository): UserService => {
        return new this(repo)
    }
    userRegister = async (dto: User)=> {
        const exists = await this.userRepo.findUserByEmail(dto.email)
        if (exists) throw new Error("Email already exists")

        return this.userRepo.createUser(dto)
    }
    findAllUsers = async (page: number, limit: number) => {
       try{
         return this.userRepo.findAllUsers(page, limit)
       }catch(err){
        if(err instanceof Error){
            throw new Error(err.message)
       }
       }
    }
}