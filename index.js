let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

require('./server-assets/db/mlab-config')

server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))


let giftRoutes = require('./server-assets/routes/gift-routes')


server.use('/api/gift', giftRoutes)


server.get('*', (req, res, next) => {
  res.status(404).send('No matching route')
})



server.listen(port, () => {
  console.log('Server running on port: ', port)
})