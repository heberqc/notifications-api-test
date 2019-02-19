const keys = {
  default: {
    mongo_cli_uri: process.env.CLIENT_API_URL_LOCAL,
    mongo_adm_uri: process.env.ADMIN_API_URL_LOCAL,
  },
  development: {
    mongo_cli_uri: process.env.CLIENT_API_URL_DEV,
    mongo_adm_uri: process.env.ADMIN_API_URL_DEV,
  },
  test: {
    mongo_cli_uri: process.env.CLIENT_API_URL_DEV,
    mongo_adm_uri: process.env.ADMIN_API_URL_DEV,
  },
  production: {
    mongo_cli_uri: process.env.CLIENT_API_URL_PROD,
    mongo_adm_uri: process.env.ADMIN_API_URL_PROD,
  },
}

console.log(`Cargando las variables de entorno ${process.env.NODE_ENV || 'default'}`)
module.exports = keys[process.env.NODE_ENV] || keys.default
