# Build local monorepo image
# docker build --no-cache -t  agentViz .

# Run image
# docker run -d -p 3000:3000 agentViz

FROM node:20-alpine
RUN apk add --update libc6-compat python3 make g++
# needed for pdfjs-dist
RUN apk add --no-cache build-base cairo-dev pango-dev

# Install Chromium
RUN apk add --no-cache chromium

# Install curl for container-level health checks
# Fixes: https://github.com/agentVizAI/agentViz/issues/4126
RUN apk add --no-cache curl

#install PNPM globaly
RUN npm install -g pnpm

ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

ENV NODE_OPTIONS=--max-old-space-size=8192

WORKDIR /usr/src

# Copy app source
COPY . .

RUN pnpm install

RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]
