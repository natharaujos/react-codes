import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../actions/frutas.action";
import { useSelector } from "react-redux";

const Fruta = ({ fruta }) => {
  const dispatch = useDispatch();
  const frutas = useSelector((state) => state.frutasReducers.frutas);
  console.log(frutas.id);

  return (
    <div className="fruta">
      <ul>
        <li>
          <strong>Fruta: </strong> {fruta.nome}
        </li>
        <li>
          <strong>Fruta: </strong> {fruta.quantidade}
        </li>
      </ul>
      <button onClick={() => dispatch(actions.remover(fruta))}>&times;</button>
    </div>
  );
};

export default Fruta;
