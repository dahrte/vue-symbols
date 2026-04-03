import * as VueSymbol from '../files'
import type { IconMap } from '../types'

const fileNames: IconMap = {
  // Angular
  '.angular-cli.json': VueSymbol.Angular,
  'angular-cli.json': VueSymbol.Angular,
  'angular.json': VueSymbol.Angular,

  // Astro
  'astro.config.cjs': VueSymbol.Astro,
  'astro.config.cts': VueSymbol.Astro,
  'astro.config.js': VueSymbol.Astro,
  'astro.config.mjs': VueSymbol.Astro,
  'astro.config.mts': VueSymbol.Astro,
  'astro.config.ts': VueSymbol.Astro,

  // Babel
  '.babelrc': VueSymbol.Babel,
  '.babelrc.cjs': VueSymbol.Babel,
  '.babelrc.cts': VueSymbol.Babel,
  '.babelrc.js': VueSymbol.Babel,
  '.babelrc.json': VueSymbol.Babel,
  '.babelrc.mjs': VueSymbol.Babel,
  'babel.config.cjs': VueSymbol.Babel,
  'babel.config.cts': VueSymbol.Babel,
  'babel.config.js': VueSymbol.Babel,
  'babel.config.json': VueSymbol.Babel,
  'babel.config.mjs': VueSymbol.Babel,
  'babel.config.ts': VueSymbol.Babel,

  // Biome
  'biome.json': VueSymbol.Biome,
  'biome.jsonc': VueSymbol.Biome,

  // Bruno
  'bruno.json': VueSymbol.Bruno,

  // Bun
  'bun.lock': VueSymbol.Bun,
  'bun.lockb': VueSymbol.Bun,
  'bunfig.toml': VueSymbol.Bun,

  // Capacitor
  'capacitor.config.json': VueSymbol.Capacitor,
  'capacitor.config.ts': VueSymbol.Capacitor,

  // Claude
  '.claude': VueSymbol.Claude,
  '.claude.md': VueSymbol.Claude,
  '.claudeignore': VueSymbol.Claude,
  '.clauderc': VueSymbol.Claude,
  'claude-prompt.md': VueSymbol.Claude,
  'claude.json': VueSymbol.Claude,
  'CLAUDE.md': VueSymbol.Claude,
  'claude.yaml': VueSymbol.Claude,
  'claude.yml': VueSymbol.Claude,

  // CMake
  'cmakecache.txt': VueSymbol.CMake,
  'cmakelists.txt': VueSymbol.CMake,

  // Cloudflare VueSymbol.Workers
  'dev.vars': VueSymbol.CloudflareWorkers,

  // Contentlayer
  'contentlayer.config.js': VueSymbol.Contentlayer,
  'contentlayer.config.ts': VueSymbol.Contentlayer,

  // Cursor
  '.cursorrules': VueSymbol.Cursor,

  // Cypress
  'cypress.config.cjs': VueSymbol.Cypress,
  'cypress.config.js': VueSymbol.Cypress,
  'cypress.config.mjs': VueSymbol.Cypress,
  'cypress.config.ts': VueSymbol.Cypress,
  'cypress.env.json': VueSymbol.Cypress,
  'cypress.json': VueSymbol.Cypress,

  // Deno
  'deno.json': VueSymbol.Deno,
  'deno.jsonc': VueSymbol.Deno,

  // Docker
  dockerfile: VueSymbol.Docker,
  'dockerfile.alpha': VueSymbol.Docker,
  'dockerfile.beta': VueSymbol.Docker,
  'dockerfile.ci': VueSymbol.Docker,
  'dockerfile.dev': VueSymbol.Docker,
  'dockerfile.development': VueSymbol.Docker,
  'dockerfile.local': VueSymbol.Docker,
  'dockerfile.prod': VueSymbol.Docker,
  'dockerfile.production': VueSymbol.Docker,
  'dockerfile.stage': VueSymbol.Docker,
  'dockerfile.staging': VueSymbol.Docker,
  'dockerfile.test': VueSymbol.Docker,
  'dockerfile.testing': VueSymbol.Docker,
  'dockerfile.web': VueSymbol.Docker,
  'dockerfile.worker': VueSymbol.Docker,
  'docker-compose.yaml': VueSymbol.Docker,
  'docker-compose.yml': VueSymbol.Docker,
  'docker-compose.alpha.yaml': VueSymbol.Docker,
  'docker-compose.alpha.yml': VueSymbol.Docker,
  'docker-compose.beta.yaml': VueSymbol.Docker,
  'docker-compose.beta.yml': VueSymbol.Docker,
  'docker-compose.ci.yaml': VueSymbol.Docker,
  'docker-compose.ci.yml': VueSymbol.Docker,
  'docker-compose.dev.yaml': VueSymbol.Docker,
  'docker-compose.dev.yml': VueSymbol.Docker,
  'docker-compose.development.yaml': VueSymbol.Docker,
  'docker-compose.development.yml': VueSymbol.Docker,
  'docker-compose.local.yaml': VueSymbol.Docker,
  'docker-compose.local.yml': VueSymbol.Docker,
  'docker-compose.override.yaml': VueSymbol.Docker,
  'docker-compose.override.yml': VueSymbol.Docker,
  'docker-compose.prod.yaml': VueSymbol.Docker,
  'docker-compose.prod.yml': VueSymbol.Docker,
  'docker-compose.production.yaml': VueSymbol.Docker,
  'docker-compose.production.yml': VueSymbol.Docker,
  'docker-compose.stage.yaml': VueSymbol.Docker,
  'docker-compose.stage.yml': VueSymbol.Docker,
  'docker-compose.staging.yaml': VueSymbol.Docker,
  'docker-compose.staging.yml': VueSymbol.Docker,
  'docker-compose.test.yaml': VueSymbol.Docker,
  'docker-compose.test.yml': VueSymbol.Docker,
  'docker-compose.testing.yaml': VueSymbol.Docker,
  'docker-compose.testing.yml': VueSymbol.Docker,
  'docker-compose.web.yaml': VueSymbol.Docker,
  'docker-compose.web.yml': VueSymbol.Docker,
  'docker-compose.worker.yaml': VueSymbol.Docker,
  'docker-compose.worker.yml': VueSymbol.Docker,
  'compose.yaml': VueSymbol.Docker,
  'compose.yml': VueSymbol.Docker,
  'compose.alpha.yaml': VueSymbol.Docker,
  'compose.alpha.yml': VueSymbol.Docker,
  'compose.beta.yaml': VueSymbol.Docker,
  'compose.beta.yml': VueSymbol.Docker,
  'compose.ci.yaml': VueSymbol.Docker,
  'compose.ci.yml': VueSymbol.Docker,
  'compose.dev.yaml': VueSymbol.Docker,
  'compose.dev.yml': VueSymbol.Docker,
  'compose.development.yaml': VueSymbol.Docker,
  'compose.development.yml': VueSymbol.Docker,
  'compose.local.yaml': VueSymbol.Docker,
  'compose.local.yml': VueSymbol.Docker,
  'compose.override.yaml': VueSymbol.Docker,
  'compose.override.yml': VueSymbol.Docker,
  'compose.prod.yaml': VueSymbol.Docker,
  'compose.prod.yml': VueSymbol.Docker,
  'compose.production.yaml': VueSymbol.Docker,
  'compose.production.yml': VueSymbol.Docker,
  'compose.stage.yaml': VueSymbol.Docker,
  'compose.stage.yml': VueSymbol.Docker,
  'compose.staging.yaml': VueSymbol.Docker,
  'compose.staging.yml': VueSymbol.Docker,
  'compose.test.yaml': VueSymbol.Docker,
  'compose.test.yml': VueSymbol.Docker,
  'compose.testing.yaml': VueSymbol.Docker,
  'compose.testing.yml': VueSymbol.Docker,
  'compose.web.yaml': VueSymbol.Docker,
  'compose.web.yml': VueSymbol.Docker,
  'compose.worker.yaml': VueSymbol.Docker,
  'compose.worker.yml': VueSymbol.Docker,
  'docker-healthcheck': VueSymbol.Docker,
  'docker-healthcheck.alpha': VueSymbol.Docker,
  'docker-healthcheck.beta': VueSymbol.Docker,
  'docker-healthcheck.ci': VueSymbol.Docker,
  'docker-healthcheck.dev': VueSymbol.Docker,
  'docker-healthcheck.development': VueSymbol.Docker,
  'docker-healthcheck.local': VueSymbol.Docker,
  'docker-healthcheck.prod': VueSymbol.Docker,
  'docker-healthcheck.production': VueSymbol.Docker,
  'docker-healthcheck.stage': VueSymbol.Docker,
  'docker-healthcheck.staging': VueSymbol.Docker,
  'docker-healthcheck.test': VueSymbol.Docker,
  'docker-healthcheck.testing': VueSymbol.Docker,
  'docker-healthcheck.web': VueSymbol.Docker,
  'docker-healthcheck.worker': VueSymbol.Docker,

  // Docusaurus
  'docusaurus.config.js': VueSymbol.Docusaurus,
  'docusaurus.config.ts': VueSymbol.Docusaurus,

  // Drizzle
  'drizzle.config.ts': VueSymbol.Drizzle,

  // Dune
  dune: VueSymbol.Dune,
  'dune-project': VueSymbol.Dune,
  'dune-workspace': VueSymbol.Dune,
  'dune-workspace.dev': VueSymbol.Dune,

  // EditorConfig
  '.editorconfig': VueSymbol.EditorConfig,

  // Earthfile
  '.env': VueSymbol.Gear,
  '.env.dev': VueSymbol.Gear,
  '.env.development': VueSymbol.Gear,
  '.env.local': VueSymbol.Gear,
  '.env.prod': VueSymbol.Gear,
  '.env.production': VueSymbol.Gear,
  '.env.test': VueSymbol.Gear,

  // ESLint
  '.eslintcache': VueSymbol.ESLint,
  '.eslintignore': VueSymbol.ESLint,
  '.eslintrc': VueSymbol.ESLint,
  '.eslintrc-jsdoc.js': VueSymbol.ESLint,
  '.eslintrc-md.js': VueSymbol.ESLint,
  '.eslintrc.cjs': VueSymbol.ESLint,
  '.eslintrc.js': VueSymbol.ESLint,
  '.eslintrc.json': VueSymbol.ESLint,
  '.eslintrc.yaml': VueSymbol.ESLint,
  '.eslintrc.yml': VueSymbol.ESLint,
  '.esmrc': VueSymbol.ESLint,
  'eslint.config.cjs': VueSymbol.ESLint,
  'eslint.config.js': VueSymbol.ESLint,
  'eslint.config.mjs': VueSymbol.ESLint,
  'eslint.config.ts': VueSymbol.ESLint,

  // ExpressiveCode
  'ec.config.mjs': VueSymbol.ExpressiveCode,

  // Cucumber
  '.feature': VueSymbol.Cucumber,

  // Firebase
  '.firebaserc': VueSymbol.Firebase,
  'firebase.json': VueSymbol.Firebase,
  'firestore.indexes.json': VueSymbol.Firebase,
  'firestore.rules': VueSymbol.Firebase,

  // Fresh
  'fresh.config.js': VueSymbol.Fresh,
  'fresh.config.mjs': VueSymbol.Fresh,
  'fresh.config.mts': VueSymbol.Fresh,
  'fresh.config.ts': VueSymbol.Fresh,

  // Gatsby
  'gatsby-browser.js': VueSymbol.Gatsby,
  'gatsby-browser.tsx': VueSymbol.Gatsby,
  'gatsby-config.js': VueSymbol.Gatsby,
  'gatsby-config.mjs': VueSymbol.Gatsby,
  'gatsby-config.ts': VueSymbol.Gatsby,
  'gatsby-node.js': VueSymbol.Gatsby,
  'gatsby-node.mjs': VueSymbol.Gatsby,
  'gatsby-node.ts': VueSymbol.Gatsby,
  'gatsby-ssr.js': VueSymbol.Gatsby,
  'gatsby-ssr.tsx': VueSymbol.Gatsby,

  // Gear (generic VueSymbol.config)
  'file.config': VueSymbol.Gear,
  '.direnv': VueSymbol.Gear,

  // Git
  '.git-blame-ignore': VueSymbol.Git,
  '.gitattributes': VueSymbol.Git,
  '.gitconfig': VueSymbol.Git,
  '.gitignore': VueSymbol.Git,
  '.gitignore-global': VueSymbol.Git,
  '.gitignore_global': VueSymbol.Git,
  '.gitinclude': VueSymbol.Git,
  '.gitkeep': VueSymbol.Git,
  '.gitmodules': VueSymbol.Git,
  'commit-msg': VueSymbol.Git,
  'git-history': VueSymbol.Git,
  'post-merge': VueSymbol.Git,
  'pre-commit': VueSymbol.Git,
  'pre-push': VueSymbol.Git,

  // GitLab
  '.gitlab-ci.yml': VueSymbol.GitLab,

  // Go
  'go.mod': VueSymbol.Go,
  'go.sum': VueSymbol.Go,
  'go.work': VueSymbol.Go,
  'go.work.sum': VueSymbol.Go,

  // Gradle
  'gradle-wrapper.properties': VueSymbol.Gradle,
  'gradle.properties': VueSymbol.Gradle,
  gradlew: VueSymbol.Gradle,

  // GraphQL
  '.graphqlconfig': VueSymbol.GraphQL,
  '.graphqlrc': VueSymbol.GraphQL,
  '.graphqlrc.cjs': VueSymbol.GraphQL,
  '.graphqlrc.js': VueSymbol.GraphQL,
  '.graphqlrc.json': VueSymbol.GraphQL,
  '.graphqlrc.toml': VueSymbol.GraphQL,
  '.graphqlrc.ts': VueSymbol.GraphQL,
  '.graphqlrc.yaml': VueSymbol.GraphQL,
  '.graphqlrc.yml': VueSymbol.GraphQL,
  'graphql.config.js': VueSymbol.GraphQL,
  'graphql.config.json': VueSymbol.GraphQL,
  'graphql.config.toml': VueSymbol.GraphQL,
  'graphql.config.ts': VueSymbol.GraphQL,
  'graphql.config.yaml': VueSymbol.GraphQL,
  'graphql.config.yml': VueSymbol.GraphQL,

  // Gulp
  'gulp.config.json': VueSymbol.Gulp,
  'gulpfile.babel.js': VueSymbol.Gulp,
  'gulpfile.cts': VueSymbol.Gulp,
  'gulpfile.js': VueSymbol.Gulp,
  'gulpfile.mjs': VueSymbol.Gulp,
  'gulpfile.mts': VueSymbol.Gulp,
  'gulpfile.ts': VueSymbol.Gulp,

  // Hugo
  '.hugo_build.lock': VueSymbol.Hugo,

  // Ionic
  '.io-config.json': VueSymbol.Ionic,
  'ionic.config.json': VueSymbol.Ionic,

  // Jest
  '.jestrc': VueSymbol.Jest,
  '.jestrc.js': VueSymbol.Jest,
  '.jestrc.json': VueSymbol.Jest,
  'jest-e2e.config.cjs': VueSymbol.Jest,
  'jest-e2e.config.cts': VueSymbol.Jest,
  'jest-e2e.config.js': VueSymbol.Jest,
  'jest-e2e.config.json': VueSymbol.Jest,
  'jest-e2e.config.mjs': VueSymbol.Jest,
  'jest-e2e.config.mts': VueSymbol.Jest,
  'jest-e2e.config.ts': VueSymbol.Jest,
  'jest-e2e.json': VueSymbol.Jest,
  'jest-github-actions-reporter.js': VueSymbol.Jest,
  'jest-unit.config.js': VueSymbol.Jest,
  'jest.config.cjs': VueSymbol.Jest,
  'jest.config.cts': VueSymbol.Jest,
  'jest.config.js': VueSymbol.Jest,
  'jest.config.json': VueSymbol.Jest,
  'jest.config.mjs': VueSymbol.Jest,
  'jest.config.mts': VueSymbol.Jest,
  'jest.config.ts': VueSymbol.Jest,
  'jest.e2e.config.cjs': VueSymbol.Jest,
  'jest.e2e.config.cts': VueSymbol.Jest,
  'jest.e2e.config.js': VueSymbol.Jest,
  'jest.e2e.config.json': VueSymbol.Jest,
  'jest.e2e.config.mjs': VueSymbol.Jest,
  'jest.e2e.config.mts': VueSymbol.Jest,
  'jest.e2e.config.ts': VueSymbol.Jest,
  'jest.e2e.json': VueSymbol.Jest,
  'jest.json': VueSymbol.Jest,
  'jest.setup.js': VueSymbol.Jest,
  'jest.setup.ts': VueSymbol.Jest,
  'jest.teardown.js': VueSymbol.Jest,

  // JavaScript test files
  'test.js': VueSymbol.JavaScriptTest,

  // Keystatic
  'keystatic.config.ts': VueSymbol.Keystatic,
  'keystatic.page.ts': VueSymbol.Keystatic,

  // Knip
  '.knip.json': VueSymbol.Knip,
  '.knip.jsonc': VueSymbol.Knip,
  'knip.config.js': VueSymbol.Knip,
  'knip.config.ts': VueSymbol.Knip,
  'knip.js': VueSymbol.Knip,
  'knip.json': VueSymbol.Knip,
  'knip.jsonc': VueSymbol.Knip,
  'knip.ts': VueSymbol.Knip,

  // License
  license: VueSymbol.License,
  'license-agpl': VueSymbol.License,
  'license-apache': VueSymbol.License,
  'license-bsd': VueSymbol.License,
  'license-gpl': VueSymbol.License,
  'license-lgpl': VueSymbol.License,
  'license-mit': VueSymbol.License,
  'license.md': VueSymbol.License,
  'license.rst': VueSymbol.License,
  'license.txt': VueSymbol.License,

  // Lua
  '.luacheckrc': VueSymbol.Lua,

  // Lunaria
  'lunaria.config.json': VueSymbol.Lunaria,

  // Markdoc
  'markdoc.config.ts': VueSymbol.Markdoc,

  // Minecraft
  '.mcattributes': VueSymbol.Minecraft,
  '.mcdefinitions': VueSymbol.Minecraft,
  '.mcignore': VueSymbol.Minecraft,

  // Nest
  '.nest-cli.json': VueSymbol.Nest,
  '.nestconfig.json': VueSymbol.Nest,
  'nest-cli.json': VueSymbol.Nest,
  'nestconfig.json': VueSymbol.Nest,

  // Netlify
  'netlify.json': VueSymbol.Netlify,
  'netlify.toml': VueSymbol.Netlify,
  'netlify.yaml': VueSymbol.Netlify,
  'netlify.yml': VueSymbol.Netlify,

  // Next.js
  'next.config.js': VueSymbol.Next,
  'next.config.mjs': VueSymbol.Next,
  'next.config.mts': VueSymbol.Next,
  'next.config.ts': VueSymbol.Next,

  // Node
  '.node-version': VueSymbol.Node,
  '.nvmrc': VueSymbol.Node,

  // Nodemon
  'nodemon-debug.json': VueSymbol.Nodemon,
  'nodemon.json': VueSymbol.Nodemon,

  // npm
  '.npmignore': VueSymbol.NPM,
  '.npmrc': VueSymbol.NPM,
  'package-lock.json': VueSymbol.NPM,
  'package.json': VueSymbol.NPM,

  // Nuxt
  '.nuxtignore': VueSymbol.Nuxt,
  '.nuxtrc': VueSymbol.Nuxt,
  'nuxt.config.js': VueSymbol.Nuxt,
  'nuxt.config.mjs': VueSymbol.Nuxt,
  'nuxt.config.mts': VueSymbol.Nuxt,
  'nuxt.config.ts': VueSymbol.Nuxt,

  // Nx
  '.nxignore': VueSymbol.Nx,
  'nx.json': VueSymbol.Nx,

  // Orval
  '.orvalrc': VueSymbol.Orval,
  '.orvalrc.js': VueSymbol.Orval,
  '.orvalrc.json': VueSymbol.Orval,
  '.orvalrc.ts': VueSymbol.Orval,
  '.orvalrc.yaml': VueSymbol.Orval,
  '.orvalrc.yml': VueSymbol.Orval,
  'orval.config.cjs': VueSymbol.Orval,
  'orval.config.cts': VueSymbol.Orval,
  'orval.config.js': VueSymbol.Orval,
  'orval.config.mjs': VueSymbol.Orval,
  'orval.config.mts': VueSymbol.Orval,
  'orval.config.ts': VueSymbol.Orval,

  // Oxfmt
  '.oxfmtrc.json': VueSymbol.Oxc,
  '.oxfmtrc.jsonc': VueSymbol.Oxc,
  'oxfmt.config.cjs': VueSymbol.Oxc,
  'oxfmt.config.cts': VueSymbol.Oxc,
  'oxfmt.config.js': VueSymbol.Oxc,
  'oxfmt.config.mjs': VueSymbol.Oxc,
  'oxfmt.config.mts': VueSymbol.Oxc,
  'oxfmt.config.ts': VueSymbol.Oxc,

  // Oxlint
  '.oxlintignore': VueSymbol.Oxc,
  '.oxlintrc.json': VueSymbol.Oxc,
  'oxlint.config.cjs': VueSymbol.Oxc,
  'oxlint.config.cts': VueSymbol.Oxc,
  'oxlint.config.js': VueSymbol.Oxc,
  'oxlint.config.mjs': VueSymbol.Oxc,
  'oxlint.config.mts': VueSymbol.Oxc,
  'oxlint.config.ts': VueSymbol.Oxc,

  // PandaCSS
  'panda.config.ts': VueSymbol.Panda,

  // Perl
  '.perl': VueSymbol.Perl,

  // pnpm
  '.pnpmfile.cjs': VueSymbol.PNPM,
  'pnpm-lock.yaml': VueSymbol.PNPM,
  'pnpm-workspace.yaml': VueSymbol.PNPM,

  // PostCSS
  '.postcssrc': VueSymbol.PostCSS,
  '.postcssrc.cjs': VueSymbol.PostCSS,
  '.postcssrc.cts': VueSymbol.PostCSS,
  '.postcssrc.js': VueSymbol.PostCSS,
  '.postcssrc.json': VueSymbol.PostCSS,
  '.postcssrc.ts': VueSymbol.PostCSS,
  '.postcssrc.yaml': VueSymbol.PostCSS,
  '.postcssrc.yml': VueSymbol.PostCSS,
  'postcss.config.cjs': VueSymbol.PostCSS,
  'postcss.config.cts': VueSymbol.PostCSS,
  'postcss.config.js': VueSymbol.PostCSS,
  'postcss.config.mjs': VueSymbol.PostCSS,
  'postcss.config.mts': VueSymbol.PostCSS,
  'postcss.config.ts': VueSymbol.PostCSS,

  // Prettier
  '.prettierignore': VueSymbol.Prettier,
  '.prettierrc': VueSymbol.Prettier,
  '.prettierrc.cjs': VueSymbol.Prettier,
  '.prettierrc.js': VueSymbol.Prettier,
  '.prettierrc.json': VueSymbol.Prettier,
  '.prettierrc.json5': VueSymbol.Prettier,
  '.prettierrc.mjs': VueSymbol.Prettier,
  '.prettierrc.toml': VueSymbol.Prettier,
  '.prettierrc.yaml': VueSymbol.Prettier,
  '.prettierrc.yml': VueSymbol.Prettier,
  'prettier.config.cjs': VueSymbol.Prettier,
  'prettier.config.js': VueSymbol.Prettier,
  'prettier.config.mjs': VueSymbol.Prettier,

  // Prisma
  'prisma.yml': VueSymbol.Prisma,

  // Pug
  '.pug-lintrc': VueSymbol.Pug,
  '.pug-lintrc.js': VueSymbol.Pug,
  '.pug-lintrc.json': VueSymbol.Pug,

  // Pulumi
  'pulumi.yaml': VueSymbol.Pulumi,

  // Python
  '.pubignore': VueSymbol.Dart,
  '.pylintrc': VueSymbol.Python,
  '.python-version': VueSymbol.Python,
  'manifest.in': VueSymbol.Python,
  pipfile: VueSymbol.Python,
  pylintrc: VueSymbol.Python,
  'pyproject.toml': VueSymbol.Python,
  'requirements.txt': VueSymbol.Python,
  'setup.cfg': VueSymbol.Python,

  // R
  '.Rhistory': VueSymbol.R,

  // Robot
  'robots.txt': VueSymbol.Robot,

  // Rolldown
  'rolldown.config.cjs': VueSymbol.Rolldown,
  'rolldown.config.cts': VueSymbol.Rolldown,
  'rolldown.config.js': VueSymbol.Rolldown,
  'rolldown.config.mjs': VueSymbol.Rolldown,
  'rolldown.config.mts': VueSymbol.Rolldown,
  'rolldown.config.ts': VueSymbol.Rolldown,

  // Rome
  'rome.json': VueSymbol.Rome,

  // Rsbuild
  'rsbuild.config.cjs': VueSymbol.Rsbuild,
  'rsbuild.config.cts': VueSymbol.Rsbuild,
  'rsbuild.config.js': VueSymbol.Rsbuild,
  'rsbuild.config.mjs': VueSymbol.Rsbuild,
  'rsbuild.config.mts': VueSymbol.Rsbuild,
  'rsbuild.config.ts': VueSymbol.Rsbuild,

  // Rslib
  'rslib.config.cjs': VueSymbol.Rslib,
  'rslib.config.cts': VueSymbol.Rslib,
  'rslib.config.js': VueSymbol.Rslib,
  'rslib.config.mjs': VueSymbol.Rslib,
  'rslib.config.mts': VueSymbol.Rslib,
  'rslib.config.ts': VueSymbol.Rslib,

  // Rspack
  'rspack.config.cjs': VueSymbol.Rspack,
  'rspack.config.js': VueSymbol.Rspack,
  'rspack.config.mjs': VueSymbol.Rspack,
  'rspack.config.ts': VueSymbol.Rspack,

  // Sanity
  'sanity.cli.ts': VueSymbol.Sanity,
  'sanity.config.ts': VueSymbol.Sanity,
  'sanity.theme.mjs': VueSymbol.Sanity,

  // Serverless
  'serverless.yml': VueSymbol.Serverless,

  // shadcn
  'components.json': VueSymbol.Shadcn,

  // Stylus
  '.styl': VueSymbol.Stylus,

  // Stylelint
  '.stylelintcache': VueSymbol.Stylelint,
  '.stylelintignore': VueSymbol.Stylelint,
  '.stylelintrc': VueSymbol.Stylelint,
  '.stylelintrc.cjs': VueSymbol.Stylelint,
  '.stylelintrc.js': VueSymbol.Stylelint,
  '.stylelintrc.json': VueSymbol.Stylelint,
  '.stylelintrc.yaml': VueSymbol.Stylelint,
  '.stylelintrc.yml': VueSymbol.Stylelint,
  'stylelint.config.cjs': VueSymbol.Stylelint,
  'stylelint.config.js': VueSymbol.Stylelint,

  // Svelte
  'svelte.config.cjs': VueSymbol.Svelte,
  'svelte.config.cts': VueSymbol.Svelte,
  'svelte.config.js': VueSymbol.Svelte,
  'svelte.config.ts': VueSymbol.Svelte,

  // Svelte TypeScript
  'svelte.ts': VueSymbol.SvelteTS,

  // SWC
  '.swcrc': VueSymbol.SWC,

  // Tailwind
  'tailwind.config.cjs': VueSymbol.Tailwind,
  'tailwind.config.cts': VueSymbol.Tailwind,
  'tailwind.config.js': VueSymbol.Tailwind,
  'tailwind.config.mjs': VueSymbol.Tailwind,
  'tailwind.config.mts': VueSymbol.Tailwind,
  'tailwind.config.ts': VueSymbol.Tailwind,
  'tailwind.js': VueSymbol.Tailwind,
  'tailwind.ts': VueSymbol.Tailwind,

  // Tauri
  'tauri.android.json': VueSymbol.Tauri,
  'tauri.android.toml': VueSymbol.Tauri,
  'tauri.conf.json': VueSymbol.Tauri,
  'tauri.conf.toml': VueSymbol.Tauri,
  'tauri.ios.json': VueSymbol.Tauri,
  'tauri.ios.toml': VueSymbol.Tauri,
  'tauri.linux.json': VueSymbol.Tauri,
  'tauri.linux.toml': VueSymbol.Tauri,
  'tauri.macos.json': VueSymbol.Tauri,
  'tauri.macos.toml': VueSymbol.Tauri,
  'tauri.windows.json': VueSymbol.Tauri,
  'tauri.windows.toml': VueSymbol.Tauri,

  // TypeScript test files
  'test.ts': VueSymbol.TSTest,

  // TypeScript declarations
  '.d.ts': VueSymbol.DTS,

  // TSConfig
  'tsconfig.app.json': VueSymbol.TSConfig,
  'tsconfig.base.json': VueSymbol.TSConfig,
  'tsconfig.build.json': VueSymbol.TSConfig,
  'tsconfig.cjs.json': VueSymbol.TSConfig,
  'tsconfig.config.json': VueSymbol.TSConfig,
  'tsconfig.e2e.json': VueSymbol.TSConfig,
  'tsconfig.editor.json': VueSymbol.TSConfig,
  'tsconfig.eslint.json': VueSymbol.TSConfig,
  'tsconfig.esm.json': VueSymbol.TSConfig,
  'tsconfig.json': VueSymbol.TSConfig,
  'tsconfig.lib.json': VueSymbol.TSConfig,
  'tsconfig.mjs.json': VueSymbol.TSConfig,
  'tsconfig.node.json': VueSymbol.TSConfig,
  'tsconfig.spec.json': VueSymbol.TSConfig,
  'tsconfig.test.json': VueSymbol.TSConfig,
  'tsconfig.vitest.json': VueSymbol.TSConfig,
  'tsconfig.web.json': VueSymbol.TSConfig,
  'tsconfig.webworker.json': VueSymbol.TSConfig,

  // Turborepo
  'turbo.json': VueSymbol.Turborepo,

  // UnoCSS
  'uno.config.js': VueSymbol.UnoCSS,
  'uno.config.mjs': VueSymbol.UnoCSS,
  'uno.config.mts': VueSymbol.UnoCSS,
  'uno.config.ts': VueSymbol.UnoCSS,
  'unocss.config.js': VueSymbol.UnoCSS,
  'unocss.config.mjs': VueSymbol.UnoCSS,
  'unocss.config.mts': VueSymbol.UnoCSS,
  'unocss.config.ts': VueSymbol.UnoCSS,

  // Vanilla Extract
  'css.ts': VueSymbol.VanillaExtract,

  // Vercel
  '.vercel': VueSymbol.Vercel,
  '.vercelignore': VueSymbol.Vercel,
  '.nowignore': VueSymbol.Vercel,
  'now.json': VueSymbol.Vercel,
  'vercel.json': VueSymbol.Vercel,

  // Visual VueSymbol.Studio
  '.vscodeignore': VueSymbol.VisualStudio,

  // Vite
  'vite.base.config.cjs': VueSymbol.Vite,
  'vite.base.config.cts': VueSymbol.Vite,
  'vite.base.config.js': VueSymbol.Vite,
  'vite.base.config.mjs': VueSymbol.Vite,
  'vite.base.config.mts': VueSymbol.Vite,
  'vite.base.config.ts': VueSymbol.Vite,
  'vite.config.cjs': VueSymbol.Vite,
  'vite.config.cts': VueSymbol.Vite,
  'vite.config.electron.cjs': VueSymbol.Vite,
  'vite.config.electron.cts': VueSymbol.Vite,
  'vite.config.electron.js': VueSymbol.Vite,
  'vite.config.electron.mjs': VueSymbol.Vite,
  'vite.config.electron.mts': VueSymbol.Vite,
  'vite.config.electron.ts': VueSymbol.Vite,
  'vite.config.js': VueSymbol.Vite,
  'vite.config.mjs': VueSymbol.Vite,
  'vite.config.mts': VueSymbol.Vite,
  'vite.config.ts': VueSymbol.Vite,
  'vite.main.config.cjs': VueSymbol.Vite,
  'vite.main.config.cts': VueSymbol.Vite,
  'vite.main.config.js': VueSymbol.Vite,
  'vite.main.config.mjs': VueSymbol.Vite,
  'vite.main.config.mts': VueSymbol.Vite,
  'vite.main.config.ts': VueSymbol.Vite,
  'vite.preload.config.cjs': VueSymbol.Vite,
  'vite.preload.config.cts': VueSymbol.Vite,
  'vite.preload.config.js': VueSymbol.Vite,
  'vite.preload.config.mjs': VueSymbol.Vite,
  'vite.preload.config.mts': VueSymbol.Vite,
  'vite.preload.config.ts': VueSymbol.Vite,
  'vite.renderer.config.cjs': VueSymbol.Vite,
  'vite.renderer.config.cts': VueSymbol.Vite,
  'vite.renderer.config.js': VueSymbol.Vite,
  'vite.renderer.config.mjs': VueSymbol.Vite,
  'vite.renderer.config.mts': VueSymbol.Vite,
  'vite.renderer.config.ts': VueSymbol.Vite,

  // Vitest
  'vitest.config.cjs': VueSymbol.Vitest,
  'vitest.config.cts': VueSymbol.Vitest,
  'vitest.config.js': VueSymbol.Vitest,
  'vitest.config.mjs': VueSymbol.Vitest,
  'vitest.config.mts': VueSymbol.Vitest,
  'vitest.config.ts': VueSymbol.Vitest,

  // Webpack
  'webpack.base.cjs': VueSymbol.Webpack,
  'webpack.base.cts': VueSymbol.Webpack,
  'webpack.base.js': VueSymbol.Webpack,
  'webpack.base.mjs': VueSymbol.Webpack,
  'webpack.base.mts': VueSymbol.Webpack,
  'webpack.base.ts': VueSymbol.Webpack,
  'webpack.cjs': VueSymbol.Webpack,
  'webpack.client.cjs': VueSymbol.Webpack,
  'webpack.client.cts': VueSymbol.Webpack,
  'webpack.client.js': VueSymbol.Webpack,
  'webpack.client.mjs': VueSymbol.Webpack,
  'webpack.client.mts': VueSymbol.Webpack,
  'webpack.client.ts': VueSymbol.Webpack,
  'webpack.common.cjs': VueSymbol.Webpack,
  'webpack.common.cts': VueSymbol.Webpack,
  'webpack.common.js': VueSymbol.Webpack,
  'webpack.common.mjs': VueSymbol.Webpack,
  'webpack.common.mts': VueSymbol.Webpack,
  'webpack.common.ts': VueSymbol.Webpack,
  'webpack.config.babel.js': VueSymbol.Webpack,
  'webpack.config.babel.ts': VueSymbol.Webpack,
  'webpack.config.base.babel.js': VueSymbol.Webpack,
  'webpack.config.base.babel.ts': VueSymbol.Webpack,
  'webpack.config.base.cjs': VueSymbol.Webpack,
  'webpack.config.base.cts': VueSymbol.Webpack,
  'webpack.config.base.js': VueSymbol.Webpack,
  'webpack.config.base.mjs': VueSymbol.Webpack,
  'webpack.config.base.mts': VueSymbol.Webpack,
  'webpack.config.base.ts': VueSymbol.Webpack,
  'webpack.config.cjs': VueSymbol.Webpack,
  'webpack.config.client.cjs': VueSymbol.Webpack,
  'webpack.config.client.cts': VueSymbol.Webpack,
  'webpack.config.client.js': VueSymbol.Webpack,
  'webpack.config.client.mjs': VueSymbol.Webpack,
  'webpack.config.client.mts': VueSymbol.Webpack,
  'webpack.config.client.ts': VueSymbol.Webpack,
  'webpack.config.coffee': VueSymbol.Webpack,
  'webpack.config.common.babel.js': VueSymbol.Webpack,
  'webpack.config.common.babel.ts': VueSymbol.Webpack,
  'webpack.config.common.cjs': VueSymbol.Webpack,
  'webpack.config.common.cts': VueSymbol.Webpack,
  'webpack.config.common.js': VueSymbol.Webpack,
  'webpack.config.common.mjs': VueSymbol.Webpack,
  'webpack.config.common.mts': VueSymbol.Webpack,
  'webpack.config.common.ts': VueSymbol.Webpack,
  'webpack.config.cts': VueSymbol.Webpack,
  'webpack.config.dev.babel.js': VueSymbol.Webpack,
  'webpack.config.dev.babel.ts': VueSymbol.Webpack,
  'webpack.config.dev.cjs': VueSymbol.Webpack,
  'webpack.config.dev.cts': VueSymbol.Webpack,
  'webpack.config.dev.js': VueSymbol.Webpack,
  'webpack.config.dev.mjs': VueSymbol.Webpack,
  'webpack.config.dev.mts': VueSymbol.Webpack,
  'webpack.config.dev.ts': VueSymbol.Webpack,
  'webpack.config.js': VueSymbol.Webpack,
  'webpack.config.mjs': VueSymbol.Webpack,
  'webpack.config.mts': VueSymbol.Webpack,
  'webpack.config.prod.babel.cjs': VueSymbol.Webpack,
  'webpack.config.prod.babel.cts': VueSymbol.Webpack,
  'webpack.config.prod.babel.js': VueSymbol.Webpack,
  'webpack.config.prod.babel.mjs': VueSymbol.Webpack,
  'webpack.config.prod.babel.mts': VueSymbol.Webpack,
  'webpack.config.prod.babel.ts': VueSymbol.Webpack,
  'webpack.config.prod.cjs': VueSymbol.Webpack,
  'webpack.config.prod.cts': VueSymbol.Webpack,
  'webpack.config.prod.js': VueSymbol.Webpack,
  'webpack.config.prod.mjs': VueSymbol.Webpack,
  'webpack.config.prod.mts': VueSymbol.Webpack,
  'webpack.config.prod.ts': VueSymbol.Webpack,
  'webpack.config.production.babel.js': VueSymbol.Webpack,
  'webpack.config.production.babel.ts': VueSymbol.Webpack,
  'webpack.config.production.cjs': VueSymbol.Webpack,
  'webpack.config.production.cts': VueSymbol.Webpack,
  'webpack.config.production.js': VueSymbol.Webpack,
  'webpack.config.production.mjs': VueSymbol.Webpack,
  'webpack.config.production.mts': VueSymbol.Webpack,
  'webpack.config.production.ts': VueSymbol.Webpack,
  'webpack.config.server.cjs': VueSymbol.Webpack,
  'webpack.config.server.cts': VueSymbol.Webpack,
  'webpack.config.server.js': VueSymbol.Webpack,
  'webpack.config.server.mjs': VueSymbol.Webpack,
  'webpack.config.server.mts': VueSymbol.Webpack,
  'webpack.config.server.ts': VueSymbol.Webpack,
  'webpack.config.staging.babel.js': VueSymbol.Webpack,
  'webpack.config.staging.babel.ts': VueSymbol.Webpack,
  'webpack.config.staging.cjs': VueSymbol.Webpack,
  'webpack.config.staging.cts': VueSymbol.Webpack,
  'webpack.config.staging.js': VueSymbol.Webpack,
  'webpack.config.staging.mjs': VueSymbol.Webpack,
  'webpack.config.staging.mts': VueSymbol.Webpack,
  'webpack.config.staging.ts': VueSymbol.Webpack,
  'webpack.config.test.cjs': VueSymbol.Webpack,
  'webpack.config.test.cts': VueSymbol.Webpack,
  'webpack.config.test.js': VueSymbol.Webpack,
  'webpack.config.test.mjs': VueSymbol.Webpack,
  'webpack.config.test.mts': VueSymbol.Webpack,
  'webpack.config.test.ts': VueSymbol.Webpack,
  'webpack.config.ts': VueSymbol.Webpack,
  'webpack.config.vendor.cjs': VueSymbol.Webpack,
  'webpack.config.vendor.cts': VueSymbol.Webpack,
  'webpack.config.vendor.js': VueSymbol.Webpack,
  'webpack.config.vendor.mjs': VueSymbol.Webpack,
  'webpack.config.vendor.mts': VueSymbol.Webpack,
  'webpack.config.vendor.production.cjs': VueSymbol.Webpack,
  'webpack.config.vendor.production.cts': VueSymbol.Webpack,
  'webpack.config.vendor.production.js': VueSymbol.Webpack,
  'webpack.config.vendor.production.mjs': VueSymbol.Webpack,
  'webpack.config.vendor.production.mts': VueSymbol.Webpack,
  'webpack.config.vendor.production.ts': VueSymbol.Webpack,
  'webpack.config.vendor.ts': VueSymbol.Webpack,
  'webpack.cts': VueSymbol.Webpack,
  'webpack.dev.cjs': VueSymbol.Webpack,
  'webpack.dev.cts': VueSymbol.Webpack,
  'webpack.dev.js': VueSymbol.Webpack,
  'webpack.dev.mjs': VueSymbol.Webpack,
  'webpack.dev.mts': VueSymbol.Webpack,
  'webpack.dev.ts': VueSymbol.Webpack,
  'webpack.development.cjs': VueSymbol.Webpack,
  'webpack.development.cts': VueSymbol.Webpack,
  'webpack.development.js': VueSymbol.Webpack,
  'webpack.development.mjs': VueSymbol.Webpack,
  'webpack.development.mts': VueSymbol.Webpack,
  'webpack.development.ts': VueSymbol.Webpack,
  'webpack.dist.cjs': VueSymbol.Webpack,
  'webpack.dist.cts': VueSymbol.Webpack,
  'webpack.dist.js': VueSymbol.Webpack,
  'webpack.dist.mjs': VueSymbol.Webpack,
  'webpack.dist.mts': VueSymbol.Webpack,
  'webpack.dist.ts': VueSymbol.Webpack,
  'webpack.js': VueSymbol.Webpack,
  'webpack.mix.cjs': VueSymbol.Webpack,
  'webpack.mix.cts': VueSymbol.Webpack,
  'webpack.mix.js': VueSymbol.Webpack,
  'webpack.mix.mjs': VueSymbol.Webpack,
  'webpack.mix.mts': VueSymbol.Webpack,
  'webpack.mix.ts': VueSymbol.Webpack,
  'webpack.mjs': VueSymbol.Webpack,
  'webpack.mts': VueSymbol.Webpack,
  'webpack.prod.cjs': VueSymbol.Webpack,
  'webpack.prod.config.cjs': VueSymbol.Webpack,
  'webpack.prod.config.cts': VueSymbol.Webpack,
  'webpack.prod.config.js': VueSymbol.Webpack,
  'webpack.prod.config.mjs': VueSymbol.Webpack,
  'webpack.prod.config.mts': VueSymbol.Webpack,
  'webpack.prod.config.ts': VueSymbol.Webpack,
  'webpack.prod.cts': VueSymbol.Webpack,
  'webpack.prod.js': VueSymbol.Webpack,
  'webpack.prod.mjs': VueSymbol.Webpack,
  'webpack.prod.mts': VueSymbol.Webpack,
  'webpack.prod.ts': VueSymbol.Webpack,
  'webpack.production.cjs': VueSymbol.Webpack,
  'webpack.production.cts': VueSymbol.Webpack,
  'webpack.production.js': VueSymbol.Webpack,
  'webpack.production.mjs': VueSymbol.Webpack,
  'webpack.production.mts': VueSymbol.Webpack,
  'webpack.production.ts': VueSymbol.Webpack,
  'webpack.server.cjs': VueSymbol.Webpack,
  'webpack.server.cts': VueSymbol.Webpack,
  'webpack.server.js': VueSymbol.Webpack,
  'webpack.server.mjs': VueSymbol.Webpack,
  'webpack.server.mts': VueSymbol.Webpack,
  'webpack.server.ts': VueSymbol.Webpack,
  'webpack.test.cjs': VueSymbol.Webpack,
  'webpack.test.cts': VueSymbol.Webpack,
  'webpack.test.js': VueSymbol.Webpack,
  'webpack.test.mjs': VueSymbol.Webpack,
  'webpack.test.mts': VueSymbol.Webpack,
  'webpack.test.ts': VueSymbol.Webpack,
  'webpack.ts': VueSymbol.Webpack,
  'webpackfile.cjs': VueSymbol.Webpack,
  'webpackfile.cts': VueSymbol.Webpack,
  'webpackfile.js': VueSymbol.Webpack,
  'webpackfile.mjs': VueSymbol.Webpack,
  'webpackfile.mts': VueSymbol.Webpack,
  'webpackfile.ts': VueSymbol.Webpack,

  // Yarn
  yarn: VueSymbol.Yarn,
  'yarn.lock': VueSymbol.Yarn,

  // Yummacss
  'yumma.config.cjs': VueSymbol.YummaCSS,
  'yumma.config.js': VueSymbol.YummaCSS,
  'yumma.config.mjs': VueSymbol.YummaCSS,
  'yumma.config.ts': VueSymbol.YummaCSS,
  'yumma.css': VueSymbol.YummaCSS,
  'yummacss.css': VueSymbol.YummaCSS,

  // Jenkins
  jenkinsfile: VueSymbol.Jenkins,
}

export { fileNames }
