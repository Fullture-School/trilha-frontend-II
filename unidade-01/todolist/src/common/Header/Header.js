import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import list from '../../assets/images/list.svg';
import contactBook from '../../assets/images/contact-book.svg';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <img src={list} alt="list de tarefas" width="54px" height="70px"/>
                            <Link to="todolist">ToDoList</Link>
                        </li>
                        <li>
                            <img src={contactBook} alt="list de contatos"  width="61px" height="70px"/>
                            <Link to="contacts">Contatos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;