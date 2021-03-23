import React from 'react';
import list from '../../assets/images/list.svg';
import { Ul, Li, StyledLink, TitleLink } from './styles/Header.style';
import contactBook from '../../assets/images/contact-book.svg';

const Header = () => (
    <header>
    <nav>
        <Ul>
            <Li>
                <StyledLink to="todolist">
                    <img src={list} alt="list de tarefas" width="54px" height="70px" />
                    <TitleLink>ToDoList</TitleLink>
                </StyledLink>
            </Li>
            <Li>
                <StyledLink to="contacts">
                    <img src={contactBook} alt="list de contatos" width="61px" height="70px" />
                    <TitleLink>Contatos</TitleLink>
                </StyledLink>
            </Li>
        </Ul>
    </nav>
</header>
)

export default Header;