import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'

export interface IUser {
    name: string
}

export interface IStorage {
    user: IUser[],
    setUser: (user: string) => void
}

export const useStorage = create<IStorage>()(
    persist(
        (set) => ({

        }), {
            
        })
)