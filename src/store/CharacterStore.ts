import create from 'zustand'

type UseCharacterStore = {
  query: string
  setQuery: (query: string) => void
}

export const useCharacterStore = create<UseCharacterStore>((set, get) => ({
  query: '',
  setQuery: (query) => {
    set({ query })
  },
}))
