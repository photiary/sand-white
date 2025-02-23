# 🛠️ 환경 구성

`Nuxt` + `ESlint` + `Pinia` + `SASS` + `Tailwindcss` + `Prettier` + `Storybook`

# 🍕 프로젝트 생성

- https://nuxt.com/docs/getting-started/installation

```bash
pnpm dlx nuxi@latest init <project-name>
```

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm build
```

Locally preview production build:

```bash
# pnpm
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# 🍔 ESLint

- https://eslint.nuxt.com/packages/module

```bash
npx nuxi module add eslint
```

# 🍍 Pinia

- https://nuxt.com/modules/pinia
- https://pinia.vuejs.org/ssr/nuxt.html

```bash
pnpm install pinia @pinia/nuxt
```

# 🍿 SASS

- https://nuxt.com/docs/getting-started/styling#using-preprocessors

```bash
pnpm install -D sass
```

# 🌊 tailwindcss

Tailwindcss v4 가 배포되었지만 Nuxt에서 `@apply`가 동작하지 않은 문제로 v3을 사용.

- https://tailwindcss.nuxtjs.org/getting-started/installation

```bash
pnpm i -D @nuxtjs/tailwindcss

pnpm tailwindcss init

# Intellij language server 가 @nuxtjs/tailwindcss를 참조하지 않아 에러가 발생하여 참조할 수 있도록 설치
pnpm i -D tailwindcss@3.4.17
```

# 🍟 Prettier

Nuxt 추천 stylelint는 많은 패키지가 필요하므로 사용하지 않는다.

- https://prettier.io/docs/install

```bash
pnpm add --save-dev --save-exact prettier

node --eval "fs.writeFileSync('prettier.config.js','')"

node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"

pnpm add -D eslint-config-prettier

pnpm add -D eslint-plugin-prettier

# tailwindcss 용 prettier
pnpm add -D prettier-plugin-tailwindcss
```

`# 📕 Storybook

- https://storybook.nuxtjs.org/getting-started/setup

```bash
pnpm dlx storybook@latest init

pnpm add -D @storybook/builder-vite

pnpm add -D @storybook-vue/nuxt
```

`.storybook/main.ts`

```
  core: {
    builder: '@storybook/builder-vite',
  },
```

Storybook 정보 제공 비활성화

- https://storybook.js.org/telemetry

# 🧇 Vuetify

- https://vuetifyjs.com/en/getting-started/installation/#manual-setup

```bash
pnpm i -D vuetify vite-plugin-vuetify

pnpm i @mdi/font
```

# 🍗 Github page

- https://nuxt.com/deploy/github-pages

```bash
pnpm add -D gh-pages
```

### gh-pages를 이용한 배포

Github 아바타 아이콘 > Settings > Developer settings > Personal access tokens > Tokens (classic)
Github 접속 토큰을 생성하여 패스워드로 사용. (90일 만료토큰)

```bash
pnpm deploy:github
```

### .yml을 이용한 배포

- https://nuxt.com/deploy/github-pages

- https://docs.github.com/ko/actions/writing-workflows/quickstart#creating-your-first-workflow

- 브랜치 필터 

https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#using-filters

`.github/workflows/deploy.yml` 생성

# 🍥Google 검색 노출

### Sitemap.xml 생성

- https://nuxtseo.com/docs/sitemap/getting-started/installation

```bash
pnpm i @nuxtjs/sitema
```

### Robots

- https://nuxtseo.com/docs/robots/getting-started/installation#setup-module

```bash
pnpm i @nuxtjs/robots

pnpm gnerate
```

### Error
>  ERROR  You are not allowed to generate a robots.txt with a base URL ~

-> `nuxt.config.ts`에 선언된 `baseURL` 제거

```js
app: {
  baseURL: '/sand-white/'
}
```

### 구글 Robots 규칙

- https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?hl=ko

