import React from "react";
import TableItem from "../TableItem";
import "./styles.css";

function MainTable() {
  const teams = [{ name: "Super Snooker", points: 0 }];
  return (
    <div className="main-table">
      <h2>Título da Tabela</h2>
      <table>
        <tr>
          <th>Rank</th>
          <th>Time</th>
          <th>Pontos</th>
        </tr>
        {teams.map(({ name, points }) => (
          <TableItem name={name} points={points} />
        ))}
      </table>

      <div className="table-rules">
        <p>Regras:</p>
        <div />
      </div>

      <div className="table-rules">
        <p>Premiação:</p>
        <div />
      </div>

      <div className="table-area">
        <h2>Nenhuma tabela criada!</h2>
      </div>
    </div>
  );
}

export default MainTable;
