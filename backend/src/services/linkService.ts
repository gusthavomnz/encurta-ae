import nodeCrypto = require("node:crypto");
import { prisma } from "../config/database";
import { createLinkRequest } from "../types/Links"

export class linkService {


    async createLink(linkData: createLinkRequest){
        const { redirectUrl, expiresAt, usuarioId} = linkData;
        const shortCode = "codigoaleatorio123" 
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

};
