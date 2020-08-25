import styled from 'styled-components'

import '../../assets/variables.css'

const SectionPrimary = styled.div`
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
   
`
const ModuleText = styled.div`
    width:80%;
    
`
const Title = styled.h1`
    font-family: 'Archivo Black', sans-serif;
    font-size:7em;
`
const SubTitle = styled.span`
    color: var(--main-color);
`

export {SectionPrimary, ModuleText, Title, SubTitle}