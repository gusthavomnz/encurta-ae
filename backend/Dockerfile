
#  Build 

FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .


RUN npx prisma generate
RUN npm run build

# Limpa as devDependencies deixando apenas o que roda em produção
RUN npm prune --production



# Runner 

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3607

CMD ["npm", "run", "start"]