import { z } from 'zod'

const createPostDto = z.object({
    body: z.object({
        title: z.string(),
        description: z.string(),
        images: z.array(z.string()),
        category: z.string(),
    }),
})

const deletePostDto = z.object({
    params: z.object({
        id: z.string(),
    }),
})

const getPostsDto = z.object({
    query: z.object({
        category: z.string().optional(),
        gender: z.string().optional(),
    }),
})

const updatePostDto = z.object({
    body: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        images: z.array(z.string()).optional(),
        category: z.string().optional(),
    }),
    params: z.object({
        id: z.number(),
    }),
})

type CreatePostI = z.infer<typeof createPostDto.shape.body>

export { createPostDto, getPostsDto, deletePostDto, updatePostDto, type CreatePostI }
