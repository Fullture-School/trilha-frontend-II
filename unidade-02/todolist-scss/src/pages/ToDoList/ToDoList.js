import React, { useState } from 'react';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import styles from './styles/ToDoList.module.scss';

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
            <section className={styles.inputToDoList}>
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
                    className={styles.btnSave}
                />
            </section>
            <ul className={styles.listToDoList}>
                {taskList.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        </>
    );
}

export default ToDoListHooks;