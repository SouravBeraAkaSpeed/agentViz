# agentViz Docker Hub Image

Starts agentViz from [DockerHub Image](https://hub.docker.com/r/agentVizai/agentViz)

## Usage

1. Create `.env` file and specify the `PORT` (refer to `.env.example`)
2. `docker compose up -d`
3. Open [http://localhost:3000](http://localhost:3000)
4. You can bring the containers down by `docker compose stop`

## 🔒 Authentication

1. Create `.env` file and specify the `PORT`, `agentViz_USERNAME`, and `agentViz_PASSWORD` (refer to `.env.example`)
2. Pass `agentViz_USERNAME` and `agentViz_PASSWORD` to the `docker-compose.yml` file:
    ```
    environment:
        - PORT=${PORT}
        - agentViz_USERNAME=${agentViz_USERNAME}
        - agentViz_PASSWORD=${agentViz_PASSWORD}
    ```
3. `docker compose up -d`
4. Open [http://localhost:3000](http://localhost:3000)
5. You can bring the containers down by `docker compose stop`

## 🌱 Env Variables

If you like to persist your data (flows, logs, apikeys, credentials), set these variables in the `.env` file inside `docker` folder:

-   DATABASE_PATH=/root/.agentViz
-   APIKEY_PATH=/root/.agentViz
-   LOG_PATH=/root/.agentViz/logs
-   SECRETKEY_PATH=/root/.agentViz
-   BLOB_STORAGE_PATH=/root/.agentViz/storage

agentViz also support different environment variables to configure your instance. Read [more](https://docs.agentVizai.com/environment-variables)
