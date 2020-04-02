FROM node:13

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

RUN npm ci --only=production
RUN npm run build

CMD ["npm", "start"]