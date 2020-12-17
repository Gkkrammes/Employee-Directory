import React from "react";
import "./style.css";


function DataTable(props) {
  return (
      <tr key={props.id}>
        <td>{props.name}</td>
        <td onClick={() => props.filter(props.role)}>{props.role}</td>
        <td>{props.episodes}</td>
        <td>{props.department}</td>
      </tr>
  );
}


export default DataTable;