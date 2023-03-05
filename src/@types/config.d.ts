export type Config = {
  paths: ConfigPaths
  server: ConfigServer
}

export type ConfigPaths = {
  content: string
  dist: string
}

export type ConfigServer = {
  port: number
  root: string
  open: boolean
  file: string
  wait: number
}