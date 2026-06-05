
export interface createLinkRequest {
    redirectUrl: string
    expiresAt: Date
    usuarioId: string
}

export interface LinkResponse {
    linkEncurtado: string
}