import React from 'react';

import LogoNav from '../../assets/images/logo-nav.svg'
import { Navbar, NavLink } from './style'

export default function Nav() {
    return (
        <Navbar>
            <div>
                <NavLink href="/"><img src={LogoNav} alt="Logo Navbar" /></NavLink>
            </div>
            <div>
                <NavLink href="/">FAZER PEDIDO</NavLink>
            </div>
        </Navbar>
    )
}