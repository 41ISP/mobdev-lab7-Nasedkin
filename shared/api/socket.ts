import { io } from "socket.io-client";

const socket = io("")

socket.emit()
socket.on('connection', (socket) => {
    socket.on('register', (id) => {
        
        socket.emit()
    }),
    socket.on('private_message', (data) => {
        const {to, message} = data

    }),
    socket.on('disconnect', () => {

        socket.emit()
    })
})
socket.disconnect()
socket.