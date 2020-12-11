import React, { useEffect } from "react";
import TableItem from "../TableItem";
import "./styles.css";

function MainTable({ mainTable, teams, setTeams }) {
  return (
    <div className="main-table">
      <h2>{mainTable.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Time</th>
            <th>Jogadores</th>
            <th>Pontos</th>
          </tr>
        </thead>
        {teams.length !== 0 ? (
          teams.map((team, index) => (
            <TableItem
              key={index}
              rank={index + 1}
              team={team}
              setTeams={setTeams}
            />
          ))
        ) : (
          <thead>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
        )}
      </table>

      <div className="table-rules">
        <p>Regras:</p>
        <div>{mainTable.rules}</div>
      </div>

      <div className="table-rules">
        <p>Premiação:</p>
        <div>{mainTable.prize}</div>
      </div>
      <div className="table-rules">
        <p>Pontuação vencedora:</p>
        <div>{mainTable.win}</div>
      </div>
    </div>
  );
}

export default MainTable;
