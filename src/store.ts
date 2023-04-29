import { create } from "zustand";

interface Tasks {
    title: string,
    status: string,
}

interface TaskStore {
    tasks: Tasks[],
    new: (by: Tasks) => void,
    update: (title: string, status: string) => void,

}

interface StateStore {
    title: string,
    update: (value: string) => void,
}

const updateArray = (title: string, status: string, originalArray: Tasks[]): Tasks[] => {
    // find the index of the object you want to update
    const indexToUpdate = originalArray.findIndex(obj => obj.title === title);

    // create a new array with the updated object
    const updatedArray = [
        ...originalArray.slice(0, indexToUpdate),
        { title: title, status: status },
        ...originalArray.slice(indexToUpdate + 1)
    ];

    return updatedArray;
}

// CRIAR STORAGES PARA CADA COLUNA -> A FAZER, FAZENDO, TERMINADO
// ASSIM EU POSSO NO DRAG AND DROP REMOVER DE UMA E ADCIONAR NA OUTRA EM VEZ DE PROCURAR EM 
// UMA STORAGE SÓ O ESPECÍFICO OBJETO DA TASK E ALTERÁ-LO
// NA HORA DE ADD ELE A NOVA COLUNA, NESSE EVENTO DE ONDROP JÁ COLOCO A STRING DE STATUS DESSA TASK
// SEGUINDO O PADRÃO DA COLUNA ONDE ESTÁ SENDO DROPADO

//Todo tasks stores
// export const useStoreToDo = create<TaskStore>()((set) => ({
//     tasks: [{}],
//     new: (by) => set((state) => ({tasks: [...state.tasks, by]})),
// }));
// //Ongoing tasks store
// export const useStoreOngoing = create<TaskStore>()((set) => ({
//     tasks: [{}],
//     new: (by) => set((state) => ({tasks: [...state.tasks, by]})),
// }));
//Finalized tasks store
export const useStoreTasks = create<TaskStore>()((set) => ({
    tasks: [],
    new: (by) => set((state) => ({tasks: [...state.tasks, by]})),
    update: (title, status) => set((state)=> ({tasks: updateArray(title, status, state.tasks)})),
}));

export const useTitleStore = create<StateStore>()((set) => ({
    title: '',
    update: (value: string) => set(() => ({title: value}))
}));

