import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function TeamRegister() {
  return (
    <div className="team-register">
      <h2>Cadastro de times</h2>
      <form>
        <div className="form-box">
          <label for="player1">Nome do Jogador 1:</label>
          <input name="player1" type="text" />
        </div>

        <div className="form-box">
          <label for="player2">Nome do Jogador 2:</label>
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
