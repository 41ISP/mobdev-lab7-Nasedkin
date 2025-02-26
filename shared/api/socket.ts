import { io } from "socket.io-client";

const users = {}
const messages = []

export const socket = io("")



// socket.emit()
// socket.on('connection', (socket) => {
//     socket.on('register', (id) => {
//         socket.
//         socket.emit()
//     }),
//     socket.on('private_message', (data) => {
//         const {to, message} = data
//         const reciever = data[to]
//     }),
//     socket.on('disconnect', () => {

//         socket.emit()
//     })
// })
// socket.disconnect()
// socket.