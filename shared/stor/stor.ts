import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from "@react-native-async-storage/async-storage"
export interface IUser {
    name: string
}
export interface IStorage {
    user: IUser,
    users : IUser[], 
    setUser: (user: IUser) => void
}

export const useStorage = create<IStorage>()(
    persist(
        (set) => ({
            user: {name: ''},
            users: [],
            setUser: ((user)=>set((name)=>({...name, user: user})))
        }), {
            name: 'UserName',
            storage: createJSONStorage(()=>AsyncStorage)
        })
)