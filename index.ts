import * as config from './config.json'
import compile from './src/compile'
import server from './src/server'

// Compile list of files
compile()

// Run dev server
server(config)

