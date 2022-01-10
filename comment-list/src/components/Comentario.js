import React from 'react';
import './Comentario.css'

const Comentario = (props) => (
    <div className='comentario'>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.date.toString()}</p>
        <button onClick={props.onRemove}>&times;</button>
    </div>
);

export default Comentario;