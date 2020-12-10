import React, { useState } from "react";
import "./styles.css";

function TableItem({ name, points }) {
  const [current_points, setCurrent_Points] = useState(points);

  const savePoints = (points) => {
    setCurrent_Points(points);
  };

  return (
    <tr>
      <td>1</td>
      <td>{name}</td>
      <td>
        <input
          onChange={(evt) => setCurrent_Points(evt.target.value)}
          type="text"
          value={current_points}
        />
        <button
          className="edit-btn"
          onClick={() => {
            savePoints(current_points);
          }}
        >
          Salvar
        </button>
      </td>
    </tr>
  );
}

export default TableItem;
