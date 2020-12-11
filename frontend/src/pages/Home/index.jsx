import React from "react";
import { Link } from "react-router-dom";
import MainTable from "../../components/Table";
import "./styles.css";

function Home() {
  const getTable = () => {};
  return (
    <div className="home">
      <h1>Sistema - Jogo de Sinuca</h1>

      <MainTable />

      <div className="table-link">
        <Link to="/table-register">Cadastrar um tabela</Link>
      </div>

      <div className="table-link">
        <Link to="/team-register">Cadastrar um novo time</Link>
      </div>
    </div>
  );
}

export default Home;
