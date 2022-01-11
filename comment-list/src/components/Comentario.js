import React from 'react';
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import './Comentario.css';
import imagemUsuario from './user.png';

const Comentario = (props) => {
    // const estilo = {
    //     color: 'red',
    //     padding: '10px',
    //     fontSize: '30px'
    // }

    return <div className="comentario">
        <img className="avatar" src={imagemUsuario} alt={props.nome}/>
        <div className="conteudo">
            <h2 className="nome">{props.name}</h2>
            <p className="email">{props.email}</p>
            <p className="mensagem">{props.children}</p>
            <p className="data">{formatRelative(props.date, new Date(), { locale: ptBR })}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
    </div>
}

export default Comentario;