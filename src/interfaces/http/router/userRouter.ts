import express, { Request, Response } from 'express'
import { AuthController } from '../controllers/authController'
import { UserService } from '../../../app/userService'
import { UserRepository } from '../../../domain/repositories/UserRepository'

const router = express.Router()

const authController = AuthController.instanceAuthController(
    UserService.instanceUserRepository(
        UserRepository.getInstance()
    )
)

router.get('/users', authController.getUsers)

export default router