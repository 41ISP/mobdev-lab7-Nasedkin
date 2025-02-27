import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from "@react-native-async-storage/async-storage"
export interface IUser {
    id: string,
    socketId?: string
}
export interface IStorage {
    friend: IUser,
    user: IUser,
    users: IUser[],
    setUser: (user: IUser) => void,
    setUsers: (user: IUser[]) => void
}

export const useStorage = create<IStorage>()(
    persist(
        (set) => ({
            friend: { id: '' },
            user: { id: '' },
            users: [],
            setUser: ((user) => set((state) => ({ ...state, user: user }))),
            setUsers: (users) => set((state) => ({ ...state, users }))
        }), {
        name: 'UserName',
        storage: createJSONStorage(() => AsyncStorage)
    })
)