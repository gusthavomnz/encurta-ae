
export interface createLinkRequest {
    redirectUrl: string
    expiresAt: Date
    usuarioId: string
}

export interface LinkResponse {
    linkEncurtado: string
}

export interface updateLinkRequest {
    idLinkRequest: string
    idUserRequest: string
    newExpiresAt: Date
}