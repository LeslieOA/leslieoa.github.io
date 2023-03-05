const superstatic = require('superstatic').server

import { Config } from './@types/config'

export default function server(serverConfig:Config) {

  const config = serverConfig

  const app = superstatic({
    port: config.server.port,
    config: {
      public: config.server.root
    }
  })
  
  const ws = app.listen(() => {
    console.log(`server::running http://127.0.0.1:${config.server.port}/`)
  })

}