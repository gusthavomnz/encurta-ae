export interface createLinkRequest {
    redirectUrl: string
    expiresAt: Date
}

export interface LinkResponse {
    linkEncurtado: string
}

export interface updateLinkRequest {
    linkId: string
    newExpiresAt: Date
}
