import 'reflect-metadata';
import express from 'express'
import { AuthController } from '../controllers/authController'
import { container } from 'tsyringe'

const router = express.Router()

const authController = container.resolve(AuthController)


router.get('/users', authController.getUsers)

export default router