FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . ./
EXPOSE 8080
ENV HOST=0.0.0.0
CMD [ "npm","start" ]