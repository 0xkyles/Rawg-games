import { create } from "zustand";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    search: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSearch: (search: string) => void;
    setSortOrder: (sortOrder: string) => void;
    reset: () => void;
}

const useGameQuery = create<GameQueryStore>((set) => ({
    gameQuery: {} as GameQuery,
    setGenreId: (genreId) =>
        set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
    setSearch: (search) => set(() => ({ gameQuery: { search } as GameQuery })),
    setPlatformId: (platformId) =>
        set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
    setSortOrder: (sortOrder) =>
        set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
    reset: () =>
        set((state) => ({
            gameQuery: { search: state.gameQuery.search } as GameQuery,
        })),
}));

export default useGameQuery;
