import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export const useSocket = () => {
    const [socket, setSocket] = useState<undefined | Socket>(undefined)
    useEffect(() => {
        setSocket(io(process.env.EXPO_PUBLIC_URL))
    }, [])

    return {socket}
}


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