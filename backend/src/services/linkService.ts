import crypto from "crypto";
import { prisma } from "../config/database";
import { createLinkRequest } from "../types/Links"
import { updateLinkRequest} from "../types/Links"
import axios from "axios";
import 'dotenv/config';
import QRCode from "qrcode";

const QR_CODE_API = process.env.QR_CODE_API as string;

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

     async getAllLinksByUserId(userIdRequest){
        return await prisma.link.findMany({
            where:{
                userId: userIdRequest
            },
            select: {
             id: true,
             shortCode: true,
             redirectUrl: true,
             clickCount: true,
             expiresAt: true
            }
        })

     }



     async editDateLink(objetoRecebido: updateLinkRequest){
        const  {idLinkRequest,newExpiresAt, idUserRequest} = objetoRecebido
        const linkEditado = await prisma.link.updateMany({
            where:{
                id: idLinkRequest,
                userId: idUserRequest,
            },
            data: { 
                    expiresAt: new Date(newExpiresAt),
                }
            })
            return await prisma.link.findUnique({
                where: {
                   id: idLinkRequest
            }
        })
     }

     

     async retornarLinkOriginal(urlEncurtada: string){
        const objetoLink = await prisma.link.update({
            where: {
                shortCode: urlEncurtada
            },
            data: {
                clickCount: {
                    increment: 1
                }
            }
        })

        const urlOriginal = objetoLink.redirectUrl;
        return urlOriginal;
     }


     async criarQrCode(url: string){
        const codigoImagem  = await QRCode.toDataURL(url)
        return codigoImagem;
     }





};
