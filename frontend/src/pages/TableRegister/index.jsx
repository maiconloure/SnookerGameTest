import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function TableRegister() {
  return (
    <div className="table-register">
      <h2>Cadastro de Tabela</h2>
      <form>
        <div className="form-box">
          <label for="tname">Nome: </label>
          <input name="tname" type="text" />
        </div>

        <div className="form-box">
          <label for="table-prize">Premiação(descrição): </label>
          <textarea rows="2" name="table-prize" type="text" />
        </div>

        <div className="form-box">
          <label for="table-win">Pontuação vencedora: </label>
          <input name="table-win" type="text" />
        </div>

        <div className="form-box">
          <label for="table-rules">Regras: </label>
          <textarea rows="4" name="table-rules" />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      <div className="table-register-link">
        <Link to="/">Voltar</Link>
      </div>
    </div>
  );
}

export default TableRegister;
