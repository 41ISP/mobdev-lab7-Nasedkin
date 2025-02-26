import axios from "axios"

const axiosMessageInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_URL
})

const mesRequest = {
    logReq: async (id: string) => {
        const response = await axiosMessageInstance.post('/login', {
            withCredentials: false,
            params: {
                id: id
            }
        })
        return response
    },
    msgReq: async (id: string) => {
        const response = await axiosMessageInstance.get('/messages/' + id, {
            withCredentials: false,
            params: {
                id: id
            }
        })
        return response
    }
}

export default mesRequest