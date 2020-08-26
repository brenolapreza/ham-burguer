import styled from 'styled-components'

import '../../assets/variables.css'

const SectionPrimary = styled.div`
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    @media (max-width:786px){
        height:400px;

        h1{
            font-size:5rem;
        }
    }
   
`
const ModuleText = styled.div`
    width:80%;
    
    
`
const Title = styled.h1`
    font-family: 'Archivo Black', sans-serif;
    font-size:7rem;
    margin-bottom:10px;

  

`
const SubTitle = styled.span`
    color: var(--main-color);
`

export {SectionPrimary, ModuleText, Title, SubTitle}