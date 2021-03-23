import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import list from '../../assets/images/list.svg';
import contactBook from '../../assets/images/contact-book.svg';
import styles from './styles/Header.module.css';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul className={styles.header}>
                        <li>
                            <Link to="todolist">
                                <img src={list} alt="list de tarefas" width="54px" height="70px" />
                                <div>ToDoList</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="contacts">
                                <img src={contactBook} alt="list de contatos" width="61px" height="70px" />
                                <div>Contatos</div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;