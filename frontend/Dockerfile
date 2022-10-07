FROM node:16-slim AS Builder
WORKDIR /app
COPY . .
RUN apt-get -y update
RUN apt-get -y install apt-transport-https ca-certificates gnupg curl
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]