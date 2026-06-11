export interface createLinkRequest{
    redirectUrl: string,
    expiresAt: Date,
    usuarioId: string
}


export interface allLinkRequest {
    id: string
    shortCode: string
    redirectUrl: string
    clickCount: number
    expiresAt: Date
}