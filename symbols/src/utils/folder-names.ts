import * as VueSymbol from '../folders'
import type { IconMap } from '../types'

const folderNames: IconMap = {
  // Angular
  '.angular': VueSymbol.FolderAngular,
  angular: VueSymbol.FolderAngular,

  // Android
  android: VueSymbol.FolderAndroid,

  // App
  app: VueSymbol.FolderApp,
  apps: VueSymbol.FolderApp,

  // Assets
  assets: VueSymbol.FolderAssets,

  // AWS
  aws: VueSymbol.FolderAws,
  '.azure': VueSymbol.FolderAzure,

  // Bruno
  '.bru': VueSymbol.FolderBruno,
  bru: VueSymbol.FolderBruno,

  // Build
  build: VueSymbol.FolderBuild,
  dist: VueSymbol.FolderBuild,
  out: VueSymbol.FolderBuild,
  target: VueSymbol.FolderTarget,

  // Claude
  '.claude': VueSymbol.FolderClaude,
  '.claude-code': VueSymbol.FolderClaude,
  claude: VueSymbol.FolderClaude,
  'claude-config': VueSymbol.FolderClaude,
  'claude-prompts': VueSymbol.FolderClaude,

  // Config
  config: VueSymbol.FolderConfig,

  // Constants
  constants: VueSymbol.FolderConstants,

  // Context
  context: VueSymbol.FolderContext,
  contexts: VueSymbol.FolderContext,

  // Core
  core: VueSymbol.FolderCore,
  lib: VueSymbol.FolderCore,

  // Cursor
  '.cursor': VueSymbol.FolderCursor,

  // Cypress
  cypress: VueSymbol.FolderCypress,

  // Database
  database: VueSymbol.FolderDatabase,
  databases: VueSymbol.FolderDatabase,
  db: VueSymbol.FolderDatabase,

  // Docker
  '.docker': VueSymbol.FolderDocker,
  docker: VueSymbol.FolderDocker,
  dockerfiles: VueSymbol.FolderDocker,
  'docker-compose': VueSymbol.FolderDocker,

  // Documents
  doc: VueSymbol.FolderDocuments,
  docs: VueSymbol.FolderDocuments,
  documentation: VueSymbol.FolderDocuments,
  documents: VueSymbol.FolderDocuments,

  // Drizzle
  '.drizzle': VueSymbol.FolderDrizzle,
  drizzle: VueSymbol.FolderDrizzle,

  // Effects
  effects: VueSymbol.FolderEffects,

  // Expo
  '.expo': VueSymbol.FolderExpo,
  expo: VueSymbol.FolderExpo,

  // Facade
  facade: VueSymbol.FolderFacade,

  // Firebase
  firebase: VueSymbol.FolderFirebase,

  // Fonts
  font: VueSymbol.FolderFonts,
  fonts: VueSymbol.FolderFonts,

  // Git
  '.git': VueSymbol.FolderGithub,

  // GitHub
  '.github': VueSymbol.FolderGithub,

  // GitLab
  '.gitlab': VueSymbol.FolderGitlab,

  // Gradle
  '.gradle': VueSymbol.FolderGradle,
  gradle: VueSymbol.FolderGradle,

  // GraphQL
  gql: VueSymbol.FolderGraphql,
  graphql: VueSymbol.FolderGraphql,

  // Helpers
  helpers: VueSymbol.FolderHelpers,
  tools: VueSymbol.FolderHelpers,
  utilities: VueSymbol.FolderHelpers,
  utility: VueSymbol.FolderHelpers,

  // Hooks
  hooks: VueSymbol.FolderHooks,

  // i18n
  i18n: VueSymbol.FolderI18n,
  locales: VueSymbol.FolderI18n,

  // Images
  image: VueSymbol.FolderImages,
  images: VueSymbol.FolderImages,

  // Interceptors
  interceptor: VueSymbol.FolderInterceptors,
  interceptors: VueSymbol.FolderInterceptors,

  // Interfaces
  interface: VueSymbol.FolderInterfaces,
  interfaces: VueSymbol.FolderInterfaces,
  types: VueSymbol.FolderInterfaces,

  // iOS
  ios: VueSymbol.FolderIos,

  // JavaScript
  javascript: VueSymbol.FolderJs,
  js: VueSymbol.FolderJs,
  scripts: VueSymbol.FolderJs,

  // Layout
  layout: VueSymbol.FolderLayout,
  layouts: VueSymbol.FolderLayout,

  // Lock
  '.venv': VueSymbol.FolderLock,

  // Mail
  emails: VueSymbol.FolderMail,
  mail: VueSymbol.FolderMail,
  mailers: VueSymbol.FolderMail,
  mails: VueSymbol.FolderMail,
  smtp: VueSymbol.FolderMail,

  // Middleware
  middleware: VueSymbol.FolderMiddleware,
  middlewares: VueSymbol.FolderMiddleware,

  // Models
  models: VueSymbol.FolderModels,

  // Modules
  modules: VueSymbol.FolderModules,

  // MongoDB
  mongo: VueSymbol.FolderMongo,
  mongodb: VueSymbol.FolderMongo,

  // Next
  '.next': VueSymbol.FolderApp,

  // Nginx
  nginx: VueSymbol.FolderNginx,

  // Node modules
  node_modules: VueSymbol.FolderNodeModules,

  // Nuxt
  '.nuxt': VueSymbol.FolderApp,

  // Nx
  '.nx': VueSymbol.FolderApp,

  // Pages
  pages: VueSymbol.FolderLayout,
  screens: VueSymbol.FolderLayout,

  // Pipes
  pipe: VueSymbol.FolderPipes,
  pipes: VueSymbol.FolderPipes,

  // Prisma
  prisma: VueSymbol.FolderPrisma,

  // Providers
  provider: VueSymbol.FolderProviders,
  providers: VueSymbol.FolderProviders,

  // React
  react: VueSymbol.FolderReact,
  components: VueSymbol.FolderReact,

  // Redis
  redis: VueSymbol.FolderRedis,

  // Reducer
  reducer: VueSymbol.FolderReducer,

  // Router
  router: VueSymbol.FolderRouter,
  routers: VueSymbol.FolderRouter,
  routes: VueSymbol.FolderRouter,

  // Sass
  sass: VueSymbol.FolderSass,
  scss: VueSymbol.FolderSass,
  css: VueSymbol.FolderSass,
  styles: VueSymbol.FolderSass,

  // Selector
  selector: VueSymbol.FolderSelector,

  // Services
  api: VueSymbol.FolderServices,
  auth: VueSymbol.FolderServices,
  client: VueSymbol.FolderServices,
  server: VueSymbol.FolderServices,
  service: VueSymbol.FolderServices,
  services: VueSymbol.FolderServices,

  // Shared
  shared: VueSymbol.FolderShared,
  public: VueSymbol.FolderShared,
  resources: VueSymbol.FolderShared,
  static: VueSymbol.FolderShared,

  // Source
  source: VueSymbol.FolderSrc,
  src: VueSymbol.FolderSrc,

  // Storybook
  '.storybook': VueSymbol.FolderApp,
  stories: VueSymbol.FolderApp,
  storybook: VueSymbol.FolderApp,

  // Supabase
  supabase: VueSymbol.FolderSupabase,

  // Tauri
  tauri: VueSymbol.FolderTauri,
  'src-tauri': VueSymbol.FolderTauri,

  // Test
  spec: VueSymbol.FolderApp,
  specs: VueSymbol.FolderApp,
  test: VueSymbol.FolderApp,
  tests: VueSymbol.FolderApp,

  // Tina
  tina: VueSymbol.FolderTina,

  // Turborepo
  '.turbo': VueSymbol.FolderApp,

  // Utils
  util: VueSymbol.FolderUtils,
  utils: VueSymbol.FolderUtils,

  // Vercel
  '.vercel': VueSymbol.FolderVercel,
  vercel: VueSymbol.FolderVercel,

  // VSCode
  '.vscode': VueSymbol.FolderVscode,

  // Files
  files: VueSymbol.FolderApp,
}

export { folderNames }
