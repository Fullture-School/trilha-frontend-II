import styled, { css } from 'styled-components';

export const DesktopStyle = () => ({
    DefinitionWrapper: styled.div`
        width:100%;
    `,
    DL: styled.dl`
        margin: 0;
    `,
    DT: styled.dt`
        border: 1px solid #979797;
        cursor: pointer;
        font-weight: bold;
        margin: 3px 0 0 0;
        padding: 10px;
        &:hover, &:focus {
            background-color: #4DC4EA;
            border: 1px solid #4DC4EA;
            box-shadow: 0 2px rgba(0, 0, 0, 0.2);
        }
    `,
    DText: styled.span`
        font-weight: bold;
    `,
    DD: styled.dd`
        border: 1px solid #A6A6A6;
        margin: 0;
        transition: opacity 2s cubic-bezier(0, 0, 0.38, 0.9), max-height .5s cubic-bezier(0, 0, 0.38, 0.9);
        ${props => props.open && css`
            max-height: 15rem;
            padding: 24px;
            overflow: auto;
            opacity: 100%;
        `}
        ${props => !props.open && css`
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            padding: 0;
        `}
    `,
    IconOpen: styled.span`
        font-size: 20px;
        margin-right: 15px;
        ${props => !props.open && css`
            &:after {
                content: "+";
            }
        `}
        ${props => props.open && css`
            &:after {
                content: "-";
            }
        `}
    `
});
