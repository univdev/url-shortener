FROM node:18

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm

RUN pnpm install

COPY . .

CMD ["sh", "-c", "pnpm prisma generate && pnpm start:dev"]
