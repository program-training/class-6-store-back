FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm i
RUN npm i -D typescript

COPY . .

RUN npm run build


FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]