import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/database";

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const userId = req.headers["x-user-id"] as string;

  if (!userId) {
    return res.status(401).json({ error: "Usuário não autenticado." });
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    return res.status(401).json({ error: "Usuário não encontrado." });
  }

  (req as any).userId = userId;
  next();
}
