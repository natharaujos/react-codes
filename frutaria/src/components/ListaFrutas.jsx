import React from "react";
import Fruta from "./Fruta";
import AdicionaFruta from "./AdicionaFruta";
import { useSelector } from "react-redux";

const ListaFrutas = () => {
  const frutas = useSelector((state) => state.frutasReducers.frutas);

  return (
    <>
      <h1>Lista de Frutas</h1>

      <AdicionaFruta />

      {frutas.map((fruta) => (
        <Fruta key={fruta.id} fruta={fruta}></Fruta>
      ))}
    </>
  );
};

export default ListaFrutas;
