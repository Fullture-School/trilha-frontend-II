import React, { Component } from 'react';
import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import styles from './styles/ToDoList.module.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            taskList: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSaveTask = this.onSaveTask.bind(this);
    }

    onChange(event) {
        this.setState({ task: event.target.value });
    }

    onSaveTask() {
        const { taskList, task } = this.state;
        let newListTask = [...taskList]
        newListTask.push(task);
        this.setState({ taskList: newListTask });
        this.setState({ task: '' });
    }

    render() {
        const { taskList, task } = this.state;
        return (
            <>
                <section className={styles.inputToDoList}>
                    <Input
                        ariaLabel="Salvar tarefa"
                        id="tarefa"
                        name="tarefas"
                        onChange={this.onChange}
                        addTask={this.onSaveTask}
                        type="text"
                        value={task}
                        label="Tarefa"
                    />
                    <Button
                        onClick={this.onSaveTask}
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
        )
    }
}

export default ToDoList;