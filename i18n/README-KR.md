<!-- markdownlint-disable MD030 -->

<p align="center">
<img src="https://github.com/agentVizAI/agentViz/blob/main/images/agentViz_white.svg#gh-light-mode-only">
<img src="https://github.com/agentVizAI/agentViz/blob/main/images/agentViz_dark.svg#gh-dark-mode-only">
</p>

[![Release Notes](https://img.shields.io/github/release/agentVizAI/agentViz)](https://github.com/agentVizAI/agentViz/releases)
[![Discord](https://img.shields.io/discord/1087698854775881778?label=Discord&logo=discord)](https://discord.gg/jbaHfsRVBW)
[![Twitter Follow](https://img.shields.io/twitter/follow/agentVizAI?style=social)](https://twitter.com/agentVizAI)
[![GitHub star chart](https://img.shields.io/github/stars/agentVizAI/agentViz?style=social)](https://star-history.com/#agentVizAI/agentViz)
[![GitHub fork](https://img.shields.io/github/forks/agentVizAI/agentViz?style=social)](https://github.com/agentVizAI/agentViz/fork)

[English](../README.md) | [繁體中文](./README-TW.md) | [简体中文](./README-ZH.md) | [日本語](./README-JA.md) | 한국어

<h3>AI 에이전트를 시각적으로 구축하세요</h3>
<a href="https://github.com/agentVizAI/agentViz">
<img width="100%" src="https://github.com/agentVizAI/agentViz/blob/main/images/agentViz_agentflow.gif?raw=true"></a>

## ⚡빠른 시작 가이드

18.15.0 버전 이상의 [NodeJS](https://nodejs.org/en/download) 다운로드 및 설치

1. agentViz 설치
    ```bash
    npm install -g agentViz
    ```
2. agentViz 시작하기

    ```bash
    npx agentViz start
    ```

    사용자 이름과 비밀번호로 시작하기

    ```bash
    npx agentViz start --agentViz_USERNAME=user --agentViz_PASSWORD=1234
    ```

3. [http://localhost:3000](http://localhost:3000) URL 열기

## 🐳 도커(Docker)를 활용하여 시작하기

### 도커 컴포즈 활용

1. 프로젝트의 최상위(root) 디렉토리에 있는 `docker` 폴더로 이동하세요.
2. `.env.example` 파일을 복사한 후, 같은 경로에 붙여넣기 한 다음, `.env`로 이름을 변경합니다.
3. `docker compose up -d` 실행
4. [http://localhost:3000](http://localhost:3000) URL 열기
5. `docker compose stop` 명령어를 통해 컨테이너를 종료시킬 수 있습니다.

### 도커 이미지 활용

1. 로컬에서 이미지 빌드하기:
    ```bash
    docker build --no-cache -t agentViz .
    ```
2. 이미지 실행하기:

    ```bash
    docker run -d --name agentViz -p 3000:3000 agentViz
    ```

3. 이미지 종료하기:
    ```bash
    docker stop agentViz
    ```

## 👨‍💻 개발자들을 위한 가이드

agentViz는 단일 리포지토리에 3개의 서로 다른 모듈이 있습니다.

-   `server`: API 로직을 제공하는 노드 백엔드
-   `ui`: 리액트 프론트엔드
-   `components`: 서드파티 노드 통합을 위한 컴포넌트

### 사전 설치 요건

-   [PNPM](https://pnpm.io/installation) 설치하기
    ```bash
    npm i -g pnpm
    ```

### 설치 및 설정

1. 리포지토리 복제

    ```bash
    git clone https://github.com/agentVizAI/agentViz.git
    ```

2. 리포지토리 폴더로 이동

    ```bash
    cd agentViz
    ```

3. 모든 모듈의 종속성 설치:

    ```bash
    pnpm install
    ```

4. 모든 코드 빌드하기:

    ```bash
    pnpm build
    ```

5. 애플리케이션 시작:

    ```bash
    pnpm start
    ```

    이제 [http://localhost:3000](http://localhost:3000)에서 애플리케이션에 접속할 수 있습니다.

6. 개발 환경에서 빌드할 경우:

    - `packages/ui`경로에 `.env` 파일을 생성하고 `VITE_PORT`(`.env.example` 참조)를 지정합니다.
    - `packages/server`경로에 `.env` 파일을 생성하고 `PORT`(`.env.example` 참조)를 지정합니다.
    - 실행하기

        ```bash
        pnpm dev
        ```

    코드가 변경되면 [http://localhost:8080](http://localhost:8080)에서 자동으로 애플리케이션을 새로고침 합니다.

## 🔒 인증

애플리케이션 수준의 인증을 사용하려면 `packages/server`의 `.env` 파일에 `agentViz_USERNAME` 및 `agentViz_PASSWORD`를 추가합니다:

```
agentViz_USERNAME=user
agentViz_PASSWORD=1234
```

## 🌱 환경 변수

agentViz는 인스턴스 구성을 위한 다양한 환경 변수를 지원합니다. `packages/server` 폴더 내 `.env` 파일에 다양한 환경 변수를 지정할 수 있습니다. [자세히 보기](https://github.com/agentVizAI/agentViz/blob/main/CONTRIBUTING.md#-env-variables)

## 📖 공식 문서

[agentViz 문서](https://docs.agentVizai.com/)

## 🌐 자체 호스팅 하기

기존 인프라 환경에서 agentViz를 자체 호스팅으로 배포하세요. 다양한 배포 [deployments](https://docs.agentVizai.com/configuration/deployment) 방법을 지원합니다.

-   [AWS](https://docs.agentVizai.com/deployment/aws)
-   [Azure](https://docs.agentVizai.com/deployment/azure)
-   [Digital Ocean](https://docs.agentVizai.com/deployment/digital-ocean)
-   [GCP](https://docs.agentVizai.com/deployment/gcp)
-   <details>
      <summary>그 외</summary>

    -   [Railway](https://docs.agentVizai.com/deployment/railway)

        [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/pn4G8S?referralCode=WVNPD9)

    -   [Render](https://docs.agentVizai.com/deployment/render)

        [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://docs.agentVizai.com/deployment/render)

    -   [HuggingFace Spaces](https://docs.agentVizai.com/deployment/hugging-face)

        <a href="https://huggingface.co/spaces/agentVizAI/agentViz"><img src="https://huggingface.co/datasets/huggingface/badges/raw/main/open-in-hf-spaces-sm.svg" alt="HuggingFace Spaces"></a>

    -   [Elestio](https://elest.io/open-source/agentVizai)

        [![Deploy](https://pub-da36157c854648669813f3f76c526c2b.r2.dev/deploy-on-elestio-black.png)](https://elest.io/open-source/agentVizai)

    -   [Sealos](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3DagentViz)

        [![](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3DagentViz)

    -   [RepoCloud](https://repocloud.io/details/?app_id=29)

        [![Deploy on RepoCloud](https://d16t0pc4846x52.cloudfront.net/deploy.png)](https://repocloud.io/details/?app_id=29)

      </details>

## ☁️ 클라우드 호스팅 서비스

[agentViz Cloud 시작하기](https://agentVizai.com/)

## 🙋 기술 지원

질문, 버그 리포팅, 새로운 기능 요청 등은 [discussion](https://github.com/agentVizAI/agentViz/discussions) 섹션에서 자유롭게 이야기 해주세요.

## 🙌 오픈소스 활동에 기여하기

다음과 같은 멋진 기여자들(contributors)에게 감사드립니다.

<a href="https://github.com/agentVizAI/agentViz/graphs/contributors">
<img src="https://contrib.rocks/image?repo=agentVizAI/agentViz" />
</a>

[contributing guide](CONTRIBUTING.md)를 살펴보세요. 디스코드 [Discord](https://discord.gg/jbaHfsRVBW) 채널에서도 이슈나 질의응답을 진행하실 수 있습니다.
[![Star History Chart](https://api.star-history.com/svg?repos=agentVizAI/agentViz&type=Timeline)](https://star-history.com/#agentVizAI/agentViz&Date)

## 📄 라이센스

본 리포지토리의 소스코드는 [Apache License Version 2.0](LICENSE.md) 라이센스가 적용됩니다.
