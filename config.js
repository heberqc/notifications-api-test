const keys = {
  default: {
    mongo_cli_uri: process.env.MONGODB_CLI_URI_DEF,
    mongo_adm_uri: process.env.MONGODB_ADM_URI_DEF,
  },
  development: {
    mongo_cli_uri: process.env.MONGODB_CLI_URI_DEV,
    mongo_adm_uri: process.env.MONGODB_ADM_URI_DEV,
  },
  test: {
    mongo_cli_uri: process.env.MONGODB_CLI_URI_TEST,
    mongo_adm_uri: process.env.MONGODB_ADM_URI_TEST,
  },
  production: {
    mongo_cli_uri: process.env.MONGODB_CLI_URI_PROD,
    mongo_adm_uri: process.env.MONGODB_ADM_URI_PROD,
  },
}

console.log(`Cargando las variables de entorno ${process.env.NODE_ENV || 'default'}`)
module.exports = keys[process.env.NODE_ENV] || keys.default
