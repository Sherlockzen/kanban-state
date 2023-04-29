import { useState } from 'react';
import { useStoreTasks } from './store';

const NewTask = () => {
    const newOpenTask = useStoreTasks( store => store.new);
    const [task, setTask] = useState('');

    const handleSave = () => {
        newOpenTask({title: task, status: 'A FAZER'});
    }

    return (
    <div className=' m-4'>
        {/* The button to open modal */}
        <label htmlFor="my-modal-5" className="btn">
            New task
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">
                    Insira os dados da nova tarefa!
                </h3>
                
                <div className="form-control py-4 max-w-lg">
                    <label className="input-group input-group-vertical">
                        <span>Tarefa</span>
                        <input 
                        onChange={ (e) => setTask(e.target.value)}
                        value={task}
                        type="text" 
                        placeholder="ir na farmácia..." 
                        className="input input-bordered" />
                    </label>
                </div>

                <div className=' flex gap-5 justify-end'>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn btn-error">
                            Cancelar
                        </label>
                    </div>
                    <div className="modal-action">
                        <label onClick={handleSave} htmlFor="my-modal-5" className="btn btn-success">
                            Salvar
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default NewTask;