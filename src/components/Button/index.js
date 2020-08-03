import styled from 'styled-components';

const Button = styled.button`
    background: var(--black);
    border: 1px solid var(--white);
    border-radius: 5px;
    box-sizing: border-box;
    color: var(--white);
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    padding: 16px 24px;
    opacity: .5;
    outline: none;
    text-decoration: none;
    transition: opacity .3s;
    &:hover,
    &:focus{ 
    }        
`;

export default Button;
