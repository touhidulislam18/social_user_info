FROM node:current-slim
WORKDIR /app
COPY . /app
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node", "index.js"]

