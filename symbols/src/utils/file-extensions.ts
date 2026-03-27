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
  cmake: VueSymbol.Cmake,

  // CoffeeScript
  coffee: VueSymbol.Coffeescript,
  litcoffee: VueSymbol.Coffeescript,

  // ColdFusion
  cfm: VueSymbol.Coldfusion,
  cfc: VueSymbol.Coldfusion,

  // Compressed
  zip: VueSymbol.Zip,

  // C++
  cpp: VueSymbol.Cplus,
  cc: VueSymbol.Cplus,
  cxx: VueSymbol.Cplus,

  // Crystal
  cr: VueSymbol.Crystal,

  // C#
  cs: VueSymbol.Csharp,
  csx: VueSymbol.Csharp,

  // CSV
  csv: VueSymbol.Csv,
  tsv: VueSymbol.Csv,

  // Cucumber
  feature: VueSymbol.Cucumber,

  // CUDA
  cu: VueSymbol.Cuda,
  cuh: VueSymbol.Cuda,

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
  drawio: VueSymbol.Drawio,
  'drawio.svg': VueSymbol.Drawio,
  'drawio.png': VueSymbol.Drawio,

  // TypeScript declarations
  'd.ts': VueSymbol.Dts,
  'd.cts': VueSymbol.Dts,
  'd.mts': VueSymbol.Dts,

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
  fs: VueSymbol.Fsharp,
  fsi: VueSymbol.Fsharp,
  fsx: VueSymbol.Fsharp,

  // Func (VueSymbol.TON)
  fc: VueSymbol.Func,

  // GIF
  gif: VueSymbol.Gif,

  // Gleam
  gleam: VueSymbol.Gleam,

  // Go
  go: VueSymbol.Go,

  // Gradle
  gradle: VueSymbol.Gradle,
  'gradle.kts': VueSymbol.Gradle,

  // GraphQL
  graphql: VueSymbol.Graphql,
  gql: VueSymbol.Graphql,

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
  http: VueSymbol.Http,
  rest: VueSymbol.Http,

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
  'test.js': VueSymbol.JsTest,
  'test.jsx': VueSymbol.JsTest,
  'spec.js': VueSymbol.JsTest,
  'spec.jsx': VueSymbol.JsTest,

  // JavaScript
  js: VueSymbol.Js,
  cjs: VueSymbol.Js,
  mjs: VueSymbol.Js,

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
  mdx: VueSymbol.Mdx,

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
  ml: VueSymbol.Ocaml,
  mli: VueSymbol.Ocaml,

  // Patch
  patch: VueSymbol.Patch,
  diff: VueSymbol.Patch,

  // PDF
  pdf: VueSymbol.Pdf,

  // Perl
  pl: VueSymbol.Perl,
  pm: VueSymbol.Perl,
  perl: VueSymbol.Perl,

  // PHP
  php: VueSymbol.Php,
  phtml: VueSymbol.Php,

  // Pkl
  pkl: VueSymbol.Pkl,

  // PostCSS
  pcss: VueSymbol.Postcss,

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
  tsx: VueSymbol.ReactTs,

  // React
  jsx: VueSymbol.React,

  // Rescript
  res: VueSymbol.Rescript,
  resi: VueSymbol.RescriptInterface,

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
  sbt: VueSymbol.Sbt,

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
  svg: VueSymbol.Svg,

  // Svx
  svx: VueSymbol.Svx,

  // Swift
  swift: VueSymbol.Swift,

  // Terraform
  tf: VueSymbol.Terraform,
  tfvars: VueSymbol.Terraform,
  hcl: VueSymbol.Terraform,

  // TeX
  tex: VueSymbol.Tex,
  latex: VueSymbol.Tex,
  bib: VueSymbol.Tex,
  sty: VueSymbol.Tex,
  cls: VueSymbol.Tex,

  // Text
  txt: VueSymbol.Text,
  log: VueSymbol.Text,

  // TypeScript test files
  'test.ts': VueSymbol.TsTest,
  'spec.ts': VueSymbol.TsTest,

  // TypeScript type files
  'types.ts': VueSymbol.TsTypes,

  // TypeScript
  ts: VueSymbol.Ts,
  cts: VueSymbol.Ts,
  mts: VueSymbol.Ts,

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
  xml: VueSymbol.Xml,
  xsl: VueSymbol.Xml,
  xslt: VueSymbol.Xml,
  xsd: VueSymbol.Xml,
  wsdl: VueSymbol.Xml,
  plist: VueSymbol.Xml,

  // YAML
  yml: VueSymbol.Yaml,
  yaml: VueSymbol.Yaml,

  // Zig
  zig: VueSymbol.Zig,
  zon: VueSymbol.Zig,
}

export { fileExtensions }
