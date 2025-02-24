import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from "@react-native-async-storage/async-storage"
export interface IUser {
    id: string,
    socketId?: string
}
export interface IStorage {
    user: IUser,
    users: IUser[],
    setUser: (user: IUser) => void,
    addUser: (user: IUser) => void
}

export const useStorage = create<IStorage>()(
    persist(
        (set) => ({
            user: { id: '' },
            users: [],
            setUser: ((user) => set((name) => ({ ...name, user: user }))),
            addUser: (name) => set((user) => ({ ...user, users: [...user.users, name] }))
        }), {
        name: 'UserName',
        storage: createJSONStorage(() => AsyncStorage)
    })
)