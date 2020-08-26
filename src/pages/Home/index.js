import React from 'react';

import Nav from '../../components/nav'
import ButtonMain from '../../components/button'
import {SectionPrimary, ModuleText, Title, SubTitle} from './style'

export default function Home() {
    return (
        <>
            <Nav />
            <SectionPrimary>
                <ModuleText>
                    <Title><SubTitle>HAM?</SubTitle><br/>BURGER!</Title>
                    <ButtonMain link={"/pedido"} text="FAZER UM PEDIDO"/>
                </ModuleText>
            </SectionPrimary>
        </>
    )
}