import { create } from "zustand";

interface TaskStore {
    tasks: Object[],
    new: (by: Object) => void,

}

export const useStore = create<TaskStore>()((set) => ({
    tasks: [{}],
    new: (by) => set((state) => ({tasks: [...state.tasks, by]})),
}))
