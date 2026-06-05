import crypto from "crypto";
import { prisma } from "../config/database";
import { createLinkRequest } from "../types/Links"

export class linkService {


    async createLink(linkData: createLinkRequest){
        const { redirectUrl, expiresAt, usuarioId} = linkData;
        const shortCode = this.createRandomShortCode(usuarioId)
        const linkCriado = await prisma.link.create({
            data:{
            redirectUrl,
            expiresAt,
            shortCode,
            
            
            user: {
            connect: { id: usuarioId}
            }
         }
        }
    )
    return linkCriado;
}


 createRandomShortCode(userIdComoPrefixo: string){
    const prefixoUser = String(userIdComoPrefixo).substring(0, 3);
    const aleatorio = crypto.randomBytes(2).toString("hex").substring(0, 3);
    const shortCodeUnique = `${prefixoUser}${aleatorio}`;
    return shortCodeUnique;
}




};
