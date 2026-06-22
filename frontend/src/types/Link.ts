export interface createLinkRequest{
    redirectUrl: string,
    expiresAt: Date
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
    linkId: string
    newExpiresAt: Date
}

export interface deleteLinkRequest {
   linkId: string
}
