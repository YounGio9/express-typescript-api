import type Controller from '@utils/interfaces/controller.interface'
import { Router } from 'express'
import type { Request, Response, NextFunction } from 'express'
import jsonResponse from '@utils/jsonResponse'
import zodValidator from '@middleware/zod-validator.middleware'
import { createPostDto, getPostsDto } from './post.validation'
import PostService from './post.service'

class PostController implements Controller {
    public path = '/posts'
    public router = Router()
    private readonly postService = new PostService()
    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes(): void {
        this.router.post(`/`, zodValidator(createPostDto), this.create)
        this.router.get(`/`, zodValidator(getPostsDto), this.getAll)
    }

    private readonly create = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const product = await this.postService.create(req.body)

            return res.status(201).json(jsonResponse('Post created successfully', true, product))
        } catch (error) {
            next(error)
        }
    }

    private readonly getAll = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const posts = await this.postService.getAllProducts()
            return res
                .status(200)
                .json(jsonResponse('Products retrieved successfully', true, posts))
        } catch (error) {
            next(error)
        }
    }
}

export default PostController
