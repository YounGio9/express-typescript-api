import HttpException from '@utils/exceptions/http.exception'
import logger from '@/config/logger'
import type Post from './post.interface'
import type { CreatePostI } from './post.validation'

class PostService {
    /**
     * Create a new product
     */
    public async create(payload: CreatePostI): Promise<Post> {
        try {
            const post = {}
            return post as Post
        } catch (error: any) {
            logger.error(error)
            throw new HttpException(
                error.status ?? 400,
                error.message ?? 'Unable to create Product',
            )
        }
    }

    /**
     * Get all products
     */

    public async getAllProducts(): Promise<Post[]> {
        try {
            return [{}] as Post[]
        } catch (error) {
            logger.error(error)
            throw new HttpException(400, 'Unable to find Products')
        }
    }
}

export default PostService
