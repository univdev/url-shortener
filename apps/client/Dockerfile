FROM node:18

WORKDIR /app

COPY package.json ./

RUN npm install -g pnpm

COPY . .

CMD ["sh", "-c", "pnpm install && pnpm run dev"]
