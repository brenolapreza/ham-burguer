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
    `
const NavLink = styled.a`
    font-size:24px;
    color:#fff;
    text-decoration:none;
    font-family: 'Archivo Black', sans-serif;
`
export {Navbar, NavLink};