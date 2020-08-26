import styled from 'styled-components'

import '../../assets/variables.css'

const ButtonMain = styled.a`
    background-color:var(--main-color);
    padding:10px 40px;
    color:#fff;
    font-family:var(--font-default);
    text-decoration:none;
    cursor:pointer;
    transition:1s;
    &:hover{
        background-color:var(--main-color-hover);
    }
`
export default ButtonMain