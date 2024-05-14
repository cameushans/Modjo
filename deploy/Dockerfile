FROM node:22.1.0-alpine

COPY ../package.json ./package.json

COPY .node_modules ./node_modules

COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

COPY ../dist ../dist

WORKDIR /dist

RUN pnpm run build

EXPOSE 3000

ENTRYPOINT [ "node", "main.js" ]