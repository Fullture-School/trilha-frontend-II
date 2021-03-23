import styled from 'styled-components';

export const InputContactsWrapper = styled.section`
    margin-left: 20px;
    margin-top: 100px;

    @media (min-width: 500px) {    
        margin: 100px auto ;
        width: 36%;
    }
`

export const InputContactList = styled.ul`
    margin-top: 30px;
    > li {
        margin-top: 30px;  

        > p {
            margin: 0;
        }
    }      
`