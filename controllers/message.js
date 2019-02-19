const config = require('./../config')
const axios = require('axios')

const sendMessage = (req, res) => {
  const config = req.body
  console.log('config:', config)
  res.status(201).send()
}

const birthday = async (req, res) => {
  try {
    // obtener listado de empleados que cumplen años
    const birthdayEmployees = await axios.get(
      `${config.mongo_cli_uri}/employee/birthday?date=${birthdayDate}&tenant=${tenantId}`)
    // obtener equipos (proyecto) de cada empleado que cumplen años
    const birthdayEmployeesTeams = birthdayEmployees.map(
      employee => axios.get(`${config.mongo_cli_uri}/employee/${employee.employee_id}/team?tenant=${tenantId}`))
    const employeesToNotify = await Promise.all(birthdayEmployeesTeams)
    // obtener tokens de los usuarios a los que se notificará
    // cargar schema del mensaje en la bbdd
    // realizar el envío de los mensajes
    
    res.status(201).send()
  } catch (error) {
    console.log('[birthday] Error:', error)
    return res.status(500).send({ message: 'Ocurrió un error al realizar la operación.' })
  }
}

module.exports = {
  sendMessage,
  birthday,
}
