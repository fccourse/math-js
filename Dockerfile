FROM nodejs:16

WORKDIR /app

RUN npm run build

ENTRYPOINT [ "npm", "start" ]
