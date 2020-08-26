import React from 'react';
import ButtonMain from './style'

export default function Button(props) {
    return(
        <ButtonMain href={props.link}>{props.text}</ButtonMain>
    )
}