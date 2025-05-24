<!-- markdownlint-disable MD030 -->

# agentViz

English | [中文](./README-ZH.md)

<h3>Build AI Agents, Visually</h3>

![agentViz](https://github.com/agentVizAI/agentViz/blob/main/images/agentViz_agentflow.gif?raw=true)

## ⚡Quick Start

1. Install agentViz
    ```bash
    npm install -g agentViz
    ```
2. Start agentViz

    ```bash
    npx agentViz start
    ```

3. Open [http://localhost:3000](http://localhost:3000)

## 🔒 Authentication

To enable app level authentication, add `agentViz_USERNAME` and `agentViz_PASSWORD` to the `.env` file:

```
agentViz_USERNAME=user
agentViz_PASSWORD=1234
```

## 🌱 Env Variables

agentViz support different environment variables to configure your instance. You can specify the following variables in the `.env` file inside `packages/server` folder. Read [more](https://github.com/agentVizAI/agentViz/blob/main/CONTRIBUTING.md#-env-variables)

You can also specify the env variables when using `npx`. For example:

```
npx agentViz start --PORT=3000 --DEBUG=true
```

## 📖 Tests

We use [Cypress](https://github.com/cypress-io) for our e2e testing. If you want to run the test suite in dev mode please follow this guide:

```sh
cd agentViz/packages/server
pnpm install
./node_modules/.bin/cypress install
pnpm build
#Only for writting new tests on local dev -> pnpm run cypress:open
pnpm run e2e
```

## 📖 Documentation

[agentViz Docs](https://docs.agentVizai.com/)

## 🌐 Self Host

-   [AWS](https://docs.agentVizai.com/deployment/aws)
-   [Azure](https://docs.agentVizai.com/deployment/azure)
-   [Digital Ocean](https://docs.agentVizai.com/deployment/digital-ocean)
-   [GCP](https://docs.agentVizai.com/deployment/gcp)
-   <details>
      <summary>Others</summary>

    -   [Railway](https://docs.agentVizai.com/deployment/railway)

        [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/pn4G8S?referralCode=WVNPD9)

    -   [Render](https://docs.agentVizai.com/deployment/render)

        [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://docs.agentVizai.com/deployment/render)

    -   [HuggingFace Spaces](https://docs.agentVizai.com/deployment/hugging-face)

        <a href="https://huggingface.co/spaces/agentVizAI/agentViz"><img src="https://huggingface.co/datasets/huggingface/badges/raw/main/open-in-hf-spaces-sm.svg" alt="HuggingFace Spaces"></a>

    -   [Elestio](https://elest.io/open-source/agentVizai)

        [![Deploy on Elestio](https://elest.io/images/logos/deploy-to-elestio-btn.png)](https://elest.io/open-source/agentVizai)

    -   [Sealos](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3DagentViz)

        [![](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3DagentViz)

    -   [RepoCloud](https://repocloud.io/details/?app_id=29)

        [![Deploy on RepoCloud](https://d16t0pc4846x52.cloudfront.net/deploy.png)](https://repocloud.io/details/?app_id=29)

      </details>

## ☁️ agentViz Cloud

[Get Started with agentViz Cloud](https://agentVizai.com/)

## 🙋 Support

Feel free to ask any questions, raise problems, and request new features in [discussion](https://github.com/agentVizAI/agentViz/discussions)

## 🙌 Contributing

See [contributing guide](https://github.com/agentVizAI/agentViz/blob/master/CONTRIBUTING.md). Reach out to us at [Discord](https://discord.gg/jbaHfsRVBW) if you have any questions or issues.

## 📄 License

Source code in this repository is made available under the [Apache License Version 2.0](https://github.com/agentVizAI/agentViz/blob/master/LICENSE.md).
