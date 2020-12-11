import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";

function TableRegister() {
  let history = useHistory();

  const onFinish = (evt) => {
    evt.preventDefault();
    const data = {
      name: evt.target[0].value,
      prize: evt.target[1].value,
      win: evt.target[2].value,
      rules: evt.target[3].value,
    };

    fetch("http://localhost:5000/create_table", {
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
    <div className="table-register">
      <h2>Cadastro de Tabela</h2>
      <form onSubmit={onFinish}>
        <div className="form-box">
          <label htmlFor="tname">Nome: </label>
          <input name="tname" type="text" />
        </div>

        <div className="form-box">
          <label htmlFor="table-prize">Premiação(descrição): </label>
          <textarea rows="2" name="table-prize" type="text" />
        </div>

        <div className="form-box">
          <label htmlFor="table-win">Pontuação vencedora: </label>
          <input name="table-win" type="text" />
        </div>

        <div className="form-box">
          <label htmlFor="table-rules">Regras: </label>
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
