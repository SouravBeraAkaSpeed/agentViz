<!-- markdownlint-disable MD030 -->

# agentViz

[English](./README.md) | 中文

<h3>以可视化方式构建 AI Agents</h3>

![agentViz](https://github.com/agentVizAI/agentViz/blob/main/images/agentViz_agentflow.gif?raw=true)

## ⚡ 快速入门

1. 安装 agentViz
    ```bash
    npm install -g agentViz
    ```
2. 启动 agentViz

    ```bash
    npx agentViz start
    ```

3. 打开[http://localhost:3000](http://localhost:3000)

## 🔒 身份验证

要启用应用级身份验证，请将`agentViz_USERNAME`和`agentViz_PASSWORD`添加到`.env`文件中：

```
agentViz_USERNAME=user
agentViz_PASSWORD=1234
```

## 🌱 环境变量

agentViz 支持不同的环境变量来配置您的实例。您可以在`packages/server`文件夹中的`.env`文件中指定以下变量。阅读[更多](https://docs.agentVizai.com/environment-variables)

您还可以在使用`npx`时指定环境变量。例如：

```
npx agentViz start --PORT=3000 --DEBUG=true
```

## 📖 文档

[agentViz 文档](https://docs.agentVizai.com/)

## 🌐 自托管

在您现有的基础设施中部署自托管的 agentViz，我们支持各种[部署](https://docs.agentVizai.com/configuration/deployment)

-   [AWS](https://docs.agentVizai.com/deployment/aws)
-   [Azure](https://docs.agentVizai.com/deployment/azure)
-   [Digital Ocean](https://docs.agentVizai.com/deployment/digital-ocean)
-   [GCP](https://docs.agentVizai.com/deployment/gcp)
-   <details>
      <summary>其他</summary>

    -   [Railway](https://docs.agentVizai.com/deployment/railway)

        [![在 Railway 上部署](https://railway.app/button.svg)](https://railway.app/template/pn4G8S?referralCode=WVNPD9)

    -   [Render](https://docs.agentVizai.com/deployment/render)

        [![部署到 Render](https://render.com/images/deploy-to-render-button.svg)](https://docs.agentVizai.com/deployment/render)

    -   [HuggingFace Spaces](https://docs.agentVizai.com/deployment/hugging-face)

        <a href="https://huggingface.co/spaces/agentVizAI/agentViz"><img src="https://huggingface.co/datasets/huggingface/badges/raw/main/open-in-hf-spaces-sm.svg" alt="HuggingFace Spaces"></a>

    -   [Elestio](https://elest.io/open-source/agentVizai)

        [![Deploy](https://pub-da36157c854648669813f3f76c526c2b.r2.dev/deploy-on-elestio-black.png)](https://elest.io/open-source/agentVizai)

    -   [Sealos](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3DagentViz)

        [![部署到 Sealos](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3DagentViz)

    -   [RepoCloud](https://repocloud.io/details/?app_id=29)

        [![部署到 RepoCloud](https://d16t0pc4846x52.cloudfront.net/deploy.png)](https://repocloud.io/details/?app_id=29)

      </details>

## ☁️ 云托管

[开始使用云托管](https://agentVizai.com/)

## 🙋 支持

在[讨论区](https://github.com/agentVizAI/agentViz/discussions)中随时提出任何问题、报告问题和请求新功能。

## 🙌 贡献

请参阅[贡献指南](https://github.com/agentVizAI/agentViz/blob/master/CONTRIBUTING.md)。如果您有任何问题或问题，请在[Discord](https://discord.gg/jbaHfsRVBW)上与我们联系。

## 📄 许可证

本仓库中的源代码在[Apache License Version 2.0 许可证](https://github.com/agentVizAI/agentViz/blob/master/LICENSE.md)下提供。
