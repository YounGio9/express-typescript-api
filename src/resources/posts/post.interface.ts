import type { CreatePostI } from './post.validation'

type Product = CreatePostI & {
    id: number
}

export default Product
