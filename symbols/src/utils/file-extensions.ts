import * as VueSymbol from '../files'
import type { IconMap } from '../types'

const fileExtensions: IconMap = {
  // Angular
  'component.ts': VueSymbol.AngularComponent,
  'directive.ts': VueSymbol.AngularDirective,
  'guard.ts': VueSymbol.AngularGuard,
  'module.ts': VueSymbol.AngularModule,
  'pipe.ts': VueSymbol.AngularPipe,
  'service.ts': VueSymbol.AngularService,

  // Astro
  astro: VueSymbol.Astro,

  // Audio
  mp3: VueSymbol.Audio,
  ogg: VueSymbol.Audio,
  wav: VueSymbol.Audio,
  flac: VueSymbol.Audio,
  aac: VueSymbol.Audio,
  wma: VueSymbol.Audio,
  m4a: VueSymbol.Audio,

  // Bruno
  bru: VueSymbol.Bruno,

  // C
  c: VueSymbol.C,

  // Clojure
  clj: VueSymbol.Clojure,
  cljs: VueSymbol.Clojure,
  cljc: VueSymbol.Clojure,
  edn: VueSymbol.Clojure,

  // CMake
  cmake: VueSymbol.CMake,

  // CoffeeScript
  coffee: VueSymbol.CoffeeScript,
  litcoffee: VueSymbol.CoffeeScript,

  // ColdFusion
  cfm: VueSymbol.ColdFusion,
  cfc: VueSymbol.ColdFusion,

  // Compressed
  zip: VueSymbol.Zip,

  // C++
  cpp: VueSymbol.CPlusPlus,
  cc: VueSymbol.CPlusPlus,
  cxx: VueSymbol.CPlusPlus,

  // Crystal
  cr: VueSymbol.Crystal,

  // C#
  cs: VueSymbol.CSharp,
  csx: VueSymbol.CSharp,

  // CSV
  csv: VueSymbol.CSV,
  tsv: VueSymbol.CSV,

  // Cucumber
  feature: VueSymbol.Cucumber,

  // CUDA
  cu: VueSymbol.CUDA,
  cuh: VueSymbol.CUDA,

  // Dart
  dart: VueSymbol.Dart,

  // Database
  sql: VueSymbol.Database,
  sqlite: VueSymbol.Database,
  sqlite3: VueSymbol.Database,
  db: VueSymbol.Database,

  // Document
  doc: VueSymbol.Document,
  docx: VueSymbol.Document,
  odt: VueSymbol.Document,
  rtf: VueSymbol.Document,

  // Draw.io
  drawio: VueSymbol.DrawIO,
  'drawio.svg': VueSymbol.DrawIO,
  'drawio.png': VueSymbol.DrawIO,

  // TypeScript declarations
  'd.ts': VueSymbol.DTS,
  'd.cts': VueSymbol.DTS,
  'd.mts': VueSymbol.DTS,

  // Elixir
  ex: VueSymbol.Elixir,
  exs: VueSymbol.Elixir,
  heex: VueSymbol.Elixir,

  // Erlang
  erl: VueSymbol.Erlang,
  hrl: VueSymbol.Erlang,

  // Executable
  exe: VueSymbol.Exe,
  msi: VueSymbol.Exe,
  bin: VueSymbol.Exe,

  // Font
  ttf: VueSymbol.Font,
  otf: VueSymbol.Font,
  woff: VueSymbol.Font,
  woff2: VueSymbol.Font,
  eot: VueSymbol.Font,

  // Fortran
  f: VueSymbol.Fortran,
  f90: VueSymbol.Fortran,
  f95: VueSymbol.Fortran,
  f03: VueSymbol.Fortran,
  for: VueSymbol.Fortran,

  // F#
  fs: VueSymbol.FSharp,
  fsi: VueSymbol.FSharp,
  fsx: VueSymbol.FSharp,

  // Func (VueSymbol.TON)
  fc: VueSymbol.Func,

  // GIF
  gif: VueSymbol.GIF,

  // Gleam
  gleam: VueSymbol.Gleam,

  // Go
  go: VueSymbol.Go,

  // Gradle
  gradle: VueSymbol.Gradle,
  'gradle.kts': VueSymbol.Gradle,

  // GraphQL
  graphql: VueSymbol.GraphQL,
  gql: VueSymbol.GraphQL,

  // Header files
  h: VueSymbol.H,
  hh: VueSymbol.H,
  hpp: VueSymbol.H,
  hxx: VueSymbol.H,

  // Haml
  haml: VueSymbol.Haml,

  // Haskell
  hs: VueSymbol.Haskell,
  lhs: VueSymbol.Haskell,

  // HTTP
  http: VueSymbol.HTTP,
  rest: VueSymbol.HTTP,

  // i18n
  po: VueSymbol.I18n,
  pot: VueSymbol.I18n,

  // Image
  png: VueSymbol.Image,
  jpg: VueSymbol.Image,
  jpeg: VueSymbol.Image,
  bmp: VueSymbol.Image,
  tiff: VueSymbol.Image,
  ico: VueSymbol.Image,
  webp: VueSymbol.Image,
  avif: VueSymbol.Image,

  // Java
  java: VueSymbol.Java,
  jar: VueSymbol.Java,

  // JavaScript test files
  'test.js': VueSymbol.JavaScriptTest,
  'test.jsx': VueSymbol.JavaScriptTest,
  'spec.js': VueSymbol.JavaScriptTest,
  'spec.jsx': VueSymbol.JavaScriptTest,

  // JavaScript
  js: VueSymbol.JavaScript,
  cjs: VueSymbol.JavaScript,
  mjs: VueSymbol.JavaScript,

  // Julia
  jl: VueSymbol.Julia,
  'jl.md': VueSymbol.JuliaMarkdown,

  // Kotlin
  kt: VueSymbol.Kotlin,
  kts: VueSymbol.Kotlin,

  // Laravel
  blade: VueSymbol.Laravel,
  'blade.php': VueSymbol.Laravel,

  // Liquid
  liquid: VueSymbol.Liquid,

  // Lock
  lock: VueSymbol.Lock,

  // Lua
  lua: VueSymbol.Lua,

  // Luau
  luau: VueSymbol.Luau,

  // Markdoc
  markdoc: VueSymbol.Markdoc,

  // Markdown
  md: VueSymbol.Markdown,
  markdown: VueSymbol.Markdown,

  // MDX
  mdx: VueSymbol.MDX,

  // Minecraft
  mcmeta: VueSymbol.Minecraft,
  mcfunction: VueSymbol.Minecraft,

  // Nest
  'controller.ts': VueSymbol.NestController,
  'decorator.ts': VueSymbol.NestDecorator,
  'middleware.ts': VueSymbol.NestMiddleware,

  // Nim
  nim: VueSymbol.Nim,
  nims: VueSymbol.Nim,
  nimble: VueSymbol.Nim,

  // Nix
  nix: VueSymbol.Nix,

  // Notebook
  ipynb: VueSymbol.Notebook,

  // Nunjucks
  njk: VueSymbol.Nunjucks,
  nunjucks: VueSymbol.Nunjucks,

  // OCaml
  ml: VueSymbol.OCaml,
  mli: VueSymbol.OCaml,

  // Patch
  patch: VueSymbol.Patch,
  diff: VueSymbol.Patch,

  // PDF
  pdf: VueSymbol.PDF,

  // Perl
  pl: VueSymbol.Perl,
  pm: VueSymbol.Perl,
  perl: VueSymbol.Perl,

  // PHP
  php: VueSymbol.PHP,
  phtml: VueSymbol.PHP,

  // Pkl
  pkl: VueSymbol.Pkl,

  // PostCSS
  pcss: VueSymbol.PostCSS,

  // Prisma
  prisma: VueSymbol.Prisma,

  // Proto
  proto: VueSymbol.Proto,

  // Pug
  pug: VueSymbol.Pug,
  jade: VueSymbol.Pug,

  // Python
  py: VueSymbol.Python,
  pyi: VueSymbol.Python,
  pyc: VueSymbol.Python,
  pyw: VueSymbol.Python,
  pyx: VueSymbol.Python,

  // R
  r: VueSymbol.R,
  rmd: VueSymbol.R,
  rproj: VueSymbol.R,

  // Razor
  razor: VueSymbol.Razor,
  cshtml: VueSymbol.Razor,

  // React test files
  'test.tsx': VueSymbol.ReactTest,
  'spec.tsx': VueSymbol.ReactTest,

  // React TypeScript
  tsx: VueSymbol.ReactTS,

  // React
  jsx: VueSymbol.React,

  // Rescript
  res: VueSymbol.ReScript,
  resi: VueSymbol.ReScriptInterface,

  // Robot
  robot: VueSymbol.Robot,

  // Ruby
  rb: VueSymbol.Ruby,
  erb: VueSymbol.Ruby,
  gemspec: VueSymbol.Ruby,

  // Rust
  rs: VueSymbol.Rust,

  // Sass
  scss: VueSymbol.Sass,
  sass: VueSymbol.Sass,

  // SBT
  sbt: VueSymbol.SBT,

  // Scala
  scala: VueSymbol.Scala,
  sc: VueSymbol.Scala,

  // Shell
  sh: VueSymbol.Shell,
  bash: VueSymbol.Shell,
  zsh: VueSymbol.Shell,
  fish: VueSymbol.Shell,
  ksh: VueSymbol.Shell,
  csh: VueSymbol.Shell,
  ps1: VueSymbol.Shell,
  bat: VueSymbol.Shell,
  cmd: VueSymbol.Shell,

  // Solidity
  sol: VueSymbol.Solidity,

  // Statamic Antlers
  antlers: VueSymbol.StatamicAntlers,
  'antlers.html': VueSymbol.StatamicAntlers,
  'antlers.php': VueSymbol.StatamicAntlers,

  // Storybook
  'stories.ts': VueSymbol.Storybook,
  'stories.tsx': VueSymbol.Storybook,
  'stories.js': VueSymbol.Storybook,
  'stories.jsx': VueSymbol.Storybook,
  'story.ts': VueSymbol.Storybook,
  'story.tsx': VueSymbol.Storybook,
  'story.js': VueSymbol.Storybook,
  'story.jsx': VueSymbol.Storybook,

  // Stylus
  styl: VueSymbol.Stylus,

  // Svelte
  svelte: VueSymbol.Svelte,

  // SVG
  svg: VueSymbol.SVG,

  // Svx
  svx: VueSymbol.Svx,

  // Swift
  swift: VueSymbol.Swift,

  // Terraform
  tf: VueSymbol.Terraform,
  tfvars: VueSymbol.Terraform,
  hcl: VueSymbol.Terraform,

  // TeX
  tex: VueSymbol.TeX,
  latex: VueSymbol.TeX,
  bib: VueSymbol.TeX,
  sty: VueSymbol.TeX,
  cls: VueSymbol.TeX,

  // Text
  txt: VueSymbol.Text,
  log: VueSymbol.Text,

  // TypeScript test files
  'test.ts': VueSymbol.TSTest,
  'spec.ts': VueSymbol.TSTest,

  // TypeScript type files
  'types.ts': VueSymbol.TSTypes,

  // TypeScript
  ts: VueSymbol.TypeScript,
  cts: VueSymbol.TypeScript,
  mts: VueSymbol.TypeScript,

  // Twig
  twig: VueSymbol.Twig,

  // V
  v: VueSymbol.V,

  // Vanilla Extract
  'css.ts': VueSymbol.VanillaExtract,

  // Video
  mp4: VueSymbol.Video,
  mkv: VueSymbol.Video,
  avi: VueSymbol.Video,
  mov: VueSymbol.Video,
  wmv: VueSymbol.Video,
  webm: VueSymbol.Video,
  flv: VueSymbol.Video,

  // Visual Studio
  sln: VueSymbol.VisualStudio,
  csproj: VueSymbol.VisualStudio,
  vbproj: VueSymbol.VisualStudio,

  // Vue
  vue: VueSymbol.Vue,

  // XML
  xml: VueSymbol.XML,
  xsl: VueSymbol.XML,
  xslt: VueSymbol.XML,
  xsd: VueSymbol.XML,
  wsdl: VueSymbol.XML,
  plist: VueSymbol.XML,

  // YAML
  yml: VueSymbol.YAML,
  yaml: VueSymbol.YAML,

  // Zig
  zig: VueSymbol.Zig,
  zon: VueSymbol.Zig,
}

export { fileExtensions }
