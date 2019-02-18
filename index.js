require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Inicializar el sdk
const admin = require('firebase-admin')
const serviceAccount = require('./keys/pruebawpn-firebase-adminsdk-e1mab-8ced4fc267.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pruebawpn.firebaseio.com'
})

// This registration token comes from the client FCM SDKs.
const registrationToken = process.env.CLIENT_TOKEN

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  const query = req.query
  console.log('query:', query)
  res.sendFile(__dirname + '/public/lorem.html')
})

app.get('/send-push', (req, res) => {
  console.log('mandar mensaje push')
  // See documentation on defining a message payload.
  const message = {
    webpush: {
      notification: {
        title: 'Título de prueba',
        body: 'Cuerpo de prueba.',
        click_action: 'http://localhost:5000/',
        icon: '/img/burger.png'
      }
    },
    // notification: {
    //   title: 'Firebase',
    //   body: 'Firebase is awesome',
    //   // click_action: 'http://localhost:3000/',
    //   // icon: 'http://url-to-an-icon/icon.png'
    // },
    // data: {
    //   score: '850',
    //   time: '2:45'
    // },
    token: registrationToken
  };

  // Send a message to the device corresponding to the provided
  // registration token.
  admin.messaging().send(message)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
      res.status(200).send(response)
    })
    .catch((error) => {
      console.log('Error sending message:', error);
      res.status(500).send(error)
    })
})

const listener = app.listen(process.env.PORT || 5000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

