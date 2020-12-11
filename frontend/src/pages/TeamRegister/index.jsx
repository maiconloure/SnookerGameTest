import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";

function TeamRegister() {
  let history = useHistory();

  const onFinish = (evt) => {
    evt.preventDefault();
    const data = {
      name: evt.target[0].value,
      player1: evt.target[1].value,
      player2: evt.target[2].value,
    };
    console.log(data);
    console.log(JSON.stringify(data));

    fetch("http://localhost:5000/create_team", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    history.push("/");
  };

  return (
    <div className="team-register">
      <h2>Cadastro de times</h2>
      <form onSubmit={onFinish}>
        <div className="form-box">
          <label htmlFor="team-name">Nome do Time:</label>
          <input name="team-name" type="text" />
        </div>
        <div className="form-box">
          <label htmlFor="player1">Nome do Jogador 1:</label>
          <input name="player1" type="text" />
        </div>

        <div className="form-box">
          <label htmlFor="player2">Nome do Jogador 2:</label>
          <input name="player2" type="text" />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      <div className="team-register-link">
        <Link to="/">Voltar</Link>
      </div>
    </div>
  );
}

export default TeamRegister;
