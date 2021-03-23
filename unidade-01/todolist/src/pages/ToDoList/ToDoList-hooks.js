import React, { useState } from 'react';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

const ToDoListHooks = () =>  {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]); 
    
    const onChange = (event) => {
        setTask(event.target.value);
    }

    const onSaveTask = () => {
        let newListTask = [...taskList]
        newListTask.push(task);
        setTaskList(newListTask);
        setTask('');
    }

    return (
        <>
            <section>
                <Input
                    ariaLabel="Salvar tarefa"
                    id="tarefa"
                    name="tarefas"
                    onChange={onChange}
                    addTask={onSaveTask}
                    type="text"
                    value={task}
                />
                <Button
                    onClick={onSaveTask}
                    text="Salvar"
                    disabled={!Boolean(task)}
                />
            </section>
            <ul>
                {taskList.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        </>
    );
}

export default ToDoListHooks;