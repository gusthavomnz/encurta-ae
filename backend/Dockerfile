# === Build === 
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx prisma generate
RUN npm run build

RUN npm prune --production


# === Runner === 
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 3333

# Sintaxe corrida: Sem colchetes e sem escapar barras. Funciona direto!
CMD sh -c "for i in \$(seq 1 30); do npx prisma db push && break; echo \"Aguardando banco... (\$i/30)\"; sleep 2; done && npm run start"