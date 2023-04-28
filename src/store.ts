import { create } from "zustand";

interface TaskStore {
    tasks: Object[],
    new: (by: Object) => void,

}

// CRIAR STORAGES PARA CADA COLUNA -> A FAZER, FAZENDO, TERMINADO
// ASSIM EU POSSO NO DRAG AND DROP REMOVER DE UMA E ADCIONAR NA OUTRA EM VEZ DE PROCURAR EM 
// UMA STORAGE SÓ O ESPECÍFICO OBJETO DA TASK E ALTERÁ-LO
// NA HORA DE ADD ELE A NOVA COLUNA, NESSE EVENTO DE ONDROP JÁ COLOCO A STRING DE STATUS DESSA TASK
// SEGUINDO O PADRÃO DA COLUNA ONDE ESTÁ SENDO DROPADO

export const useStore = create<TaskStore>()((set) => ({
    tasks: [{}],
    new: (by) => set((state) => ({tasks: [...state.tasks, by]})),
}))
