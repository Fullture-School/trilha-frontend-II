import React, { useState } from 'react';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import { InputToDoList, ListToDoList } from './styles/ToDoList.style';

const ToDoListHooks = () => {
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
            <InputToDoList>
                <Input
                    ariaLabel="Salvar tarefa"
                    id="tarefa"
                    name="tarefas"
                    onChange={onChange}
                    addTask={onSaveTask}
                    type="text"
                    value={task}
                    label="Tarefa"
                />
                <Button
                    onClick={onSaveTask}
                    text="Salvar"
                    disabled={!Boolean(task)}
                />
            </InputToDoList>
            <ListToDoList>
                {taskList.map(item => {
                    return <li>{item}</li>
                })}
            </ListToDoList>
        </>
    );
}

export default ToDoListHooks;