import React from 'react';
import Wrapper from '../Utility/Wrapper';

const Person = (props) => {
    return (
        <Wrapper>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </Wrapper>
    )
}
export default Person;