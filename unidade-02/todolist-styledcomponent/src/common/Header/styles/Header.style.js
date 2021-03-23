import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const Li = styled.li`
    border: 1px solid #fff;
    cursor: pointer;
    list-style: none;
    padding: 5px;
    &:hover {
        border: 1px solid #000;
    }
`

export const StyledLink = styled(Link)`
    color: #000;
    display: flex;
    text-decoration: none;
`

export const TitleLink = styled.div`
    margin-top: 20px;
`
