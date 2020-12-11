import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainTable from "../../components/Table";
import "./styles.css";

function Home() {
  const [mainTable, setMainTable] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {}, [teams]);

  useEffect(() => {
    fetch("http://localhost:5000/tables")
      .then((data) => data.json())
      .then((res) => {
        if (res.length > 0) {
          setMainTable(res[0]);
        }
      })
      .catch((err) => {
        console.error(err);
      });

    fetch("http://localhost:5000/teams")
      .then((data) => data.json())
      .then((res) => {
        setTeams(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/check_winner")
      .then((data) => data.json())
      .then((res) => {
        if (res.length !== 0) {
          alert(`${res["name"]} Venceu o jogo!`);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="home">
      <h1>Sistema - Jogo de Sinuca</h1>

      {mainTable.length !== 0 ? (
        <MainTable mainTable={mainTable} teams={teams} setTeams={setTeams} />
      ) : (
        <div className="table-area">
          <h2>Nenhuma tabela criada!</h2>
        </div>
      )}

      {mainTable.length === 0 && (
        <div className="table-link">
          <Link to="/table-register">Cadastrar um tabela</Link>
        </div>
      )}

      {teams.length < 10 ? (
        <div className="table-link">
          <Link to="/team-register">Cadastrar um novo time</Link>
        </div>
      ) : (
        <div>
          <p>Limite de times atingido!</p>
        </div>
      )}
    </div>
  );
}

export default Home;
