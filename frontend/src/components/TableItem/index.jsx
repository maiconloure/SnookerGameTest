import React, { useState, useEffect } from "react";
import "./styles.css";

function TableItem({ rank, team, setTeams }) {
  const [current_points, setCurrentPoints] = useState(team.points);
  const [editPoints, setEditPoints] = useState(false);

  useEffect(() => {}, [current_points]);
  const data = {
    id: team.id,
    name: team.name,
    player1: team.player1,
    player2: team.player2,
    points: current_points,
  };

  const updatePoints = () => {
    fetch(`http://localhost:5000/team?id=${parseInt(team.id)}&del=false`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((res) => {
        setEditPoints(false);
        setTeams(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const delTeam = () => {
    fetch(`http://localhost:5000/team?id=${parseInt(team.id)}&del=true`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((res) => {
        setTeams(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <thead>
      <tr>
        <td>{rank}</td>
        <td>{team.name}</td>
        <td>
          {team.player1}, {team.player2}
        </td>
        <td>
          {editPoints ? (
            <input
              onChange={(evt) => setCurrentPoints(evt.target.value)}
              type="text"
              value={current_points}
            />
          ) : (
            <p>{team.points}</p>
          )}

          {editPoints ? (
            <button
              className="edit-btn"
              onClick={() => {
                updatePoints();
              }}
            >
              Salvar
            </button>
          ) : (
            <button
              className="edit-btn"
              onClick={() => {
                setEditPoints(true);
              }}
            >
              Editar
            </button>
          )}

          <button
            className="edit-btn"
            onClick={() => {
              delTeam();
            }}
          >
            Excluir
          </button>
        </td>
      </tr>
    </thead>
  );
}

export default TableItem;
