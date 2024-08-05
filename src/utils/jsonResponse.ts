const jsonResponse = (message: string, success: boolean, data?: any): Record<string, unknown> => ({
    success,
    message,
    data,
})

export default jsonResponse
