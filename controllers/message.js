const config = require('./../config')

const sendMessage = (req, res) => {
  const config = req.body
  console.log('config:', config)
  res.status(201).send()
}

const birthday = (req, res) => {
  // obtener listado de empleados que cumplen años
  // obtener equipos (proyecto) de cada empleado que cumplen años
  // obtener tokens de los usuarios a los que se notificará
  // cargar schema del mensaje en la bbdd
  // realizar el envío de los mensajes

  res.status(201).send()
}

module.exports = {
  sendMessage,
  birthday,
}
