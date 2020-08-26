import styled from 'styled-components'

import '../../assets/variables.css'

const Navbar = styled.div`
    width:100%;
    height:96px;
    padding:0 50px;
    
    background-color: var(--main-color);
    
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media (max-width:786px){
        img{
            width:180px;
        }
        a{
            font-size:20px;
        }
    }
    `
const NavLink = styled.a`
    font-size:24px;
    color:#fff;
    text-decoration:none;
    font-family:var(--font-default);
    
`
export {Navbar, NavLink};