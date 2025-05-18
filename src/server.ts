import app from './app'
import http from 'http'
import {configDotenv} from 'dotenv'
configDotenv()
const debug = require('debug')('train-location-and-visitors-server:server')

const normalizePort = (val: string) => {
    const port = parseInt(val, 10)
    if (isNaN(port)) return val // named pipe
    if (port >= 0) return port // port number
    return false
}

const onError = (error: Error & { syscall?: string, code?: string }) => {
    if (error.syscall !== 'listen') throw error

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            return process.exit(1)
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            return process.exit(1)
        default:
            throw error
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = () => {
    const addr = server.address()
    if (typeof addr === 'string' || addr === null) {
        return debug('Listening on ' + addr)
    }
    debug('Listening on port ' + addr.port)
}

const port = normalizePort(process.env.PORT || '3000')

app.set('port', port)

const server = http.createServer(app)

server.on('error', onError);
server.on('listening', onListening);
// Listen on a provided port, on all network interfaces
server.listen(port);
