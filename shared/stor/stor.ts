import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from "@react-native-async-storage/async-storage"
export interface IUser {
    id: string,
    socketId?: string
}
export interface IStorage {
    friend: string,
    user: IUser,
    users: IUser[],
    setUser: (user: IUser) => void,
    setUsers: (user: IUser[]) => void,
    setFriend: (user: string) => void
}

export const useStorage = create<IStorage>()(
    persist(
        (set) => ({
            friend: "",
            user: { id: '' },
            users: [],
            setFriend: ((id) => set((state) => ({ ...state, friend: id }))),
            setUser: ((user) => set((state) => ({ ...state, user: user }))),
            setUsers: (users) => set((state) => ({ ...state, users }))
        }), {
        name: 'UserName',
        storage: createJSONStorage(() => AsyncStorage)
    })
)