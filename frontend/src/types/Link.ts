export interface createLinkRequest{
    redirectUrl: string,
    expiresAt: Date,
    usuarioId: string
}



export interface allLinkRequest {
    Links: getLinkRequest[];
}

export interface getLinkRequest {
    id: string
    shortCode: string
    redirectUrl: string
    clickCount: number
    expiresAt: Date
}

export interface updateDateLinkRequest {
    idLinkRequest: string
    idUserRequest: string
    newExpiresAt: Date
}

export interface deleteLinkRequest {
   userId: string,
   linkId: string
}