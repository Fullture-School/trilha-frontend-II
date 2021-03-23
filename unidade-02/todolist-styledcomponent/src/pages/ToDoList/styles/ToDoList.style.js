import styled from 'styled-components';

export const InputToDoList = styled.section`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 100px;

    input {
        margin-left: 10px;
    }

    @media (min-width: 500px) {
        flex-direction: row;
        justify-content: center;
    }    
`

export const ListToDoList = styled.ul`
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    justify-content: flex-start;

    @media (min-width: 500px) {
        margin: auto; 
        width: 36%;    
    }   
`