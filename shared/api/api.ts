import axios from "axios"

const axiosMessageInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_URL
})

const messangerRequest = {
    loginReq: async (id: string) => {
        const response = await axiosMessageInstance.post('/login', {
                id: id
            })
        return response
    },
    messagesReq: async (id: string) => {
        const response = await axiosMessageInstance.get('/messages/' + id)
        return response
    },
}

export default messangerRequest