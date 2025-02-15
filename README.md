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