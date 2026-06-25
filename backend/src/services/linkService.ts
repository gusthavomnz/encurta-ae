import crypto from "crypto";
import { prisma } from "../config/database";
import { createLinkRequest } from "../types/Links"
import { updateLinkRequest} from "../types/Links"
import axios from "axios";
import 'dotenv/config';
import QRCode from "qrcode";
import geoip from 'geoip-lite';
import { UAParser } from 'ua-parser-js';

const QR_CODE_API = process.env.QR_CODE_API as string;

export class linkService {

    async createLink(linkData: createLinkRequest, userId: string){
        const { redirectUrl, expiresAt } = linkData;
        const shortCode = this.createRandomShortCode(userId)
        const linkCriado = await prisma.link.create({
            data:{
            redirectUrl,
            expiresAt,
            shortCode,
            userId
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

     async getAllLinksByUserId(userId: string){
        return await prisma.link.findMany({
            where:{
                userId: userId
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

     async editDateLink(objetoRecebido: updateLinkRequest, userId: string){
        const {linkId, newExpiresAt} = objetoRecebido
        const linkEditado = await prisma.link.updateMany({
            where:{
                id: linkId,
                userId: userId,
            },
            data: {
                    expiresAt: new Date(newExpiresAt),
                }
            })
            return await prisma.link.findUnique({
                where: {
                   id: linkId
            }
        })
     }

     async retornarLinkOriginal(urlEncurtada: string, ip: string, userAgent: string, referrer: string){
        const objetoLink = await prisma.link.findUnique({
            where: {
                shortCode: urlEncurtada
            }
        })

        if (!objetoLink) return null;

        await prisma.link.update({
            where: {
                shortCode: urlEncurtada
            },
            data: {
                clickCount: {
                    increment: 1
                }
            }
        })

         const geo = geoip.lookup(ip);
    const parser = new UAParser(userAgent);
    const device = parser.getDevice().type ?? 'desktop';

        const click = await prisma.click.create({
            data: {
                device,
                country: geo?.country ?? null, 
                referrer: referrer ,
                linkId: objetoLink.id

            }
        })

        return objetoLink.redirectUrl;
     }

     async criarQrCode(url: string){
        const codigoImagem  = await QRCode.toDataURL(url)
        return codigoImagem;
     }

    async deletarLink(userId: string, linkId: string): Promise<boolean> {
    const resultado = await prisma.link.deleteMany({
        where: {
            userId: userId,
            id: linkId
        }
    });

    return resultado.count > 0;
}



async LinkAnalytics(userId: string): Promise<any> {



    return null;
}




};
