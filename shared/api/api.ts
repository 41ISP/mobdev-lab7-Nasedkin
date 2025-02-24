import axios from "axios"

const axiosMessageInstance = axios.create({
    baseURL: "api.ktkv.dev"
}) 

const mesRequest = {
    logReq: async(userName: string)=>{
        const response = await axiosMessageInstance.get
    }
}