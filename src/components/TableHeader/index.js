import React from "react";
import "./style.css";

function TableHeader(props) {
  return (
      <tr className = 'tableheading'>
        <td><button type="button" onClick={() => props.sortByHeading('name')}>Name</button></td>
        <td><button type="button" onClick={() => props.sortByHeading('role')}>Role</button></td>
        <td><button type="button" onClick={() => props.sortByHeading('episodes')}>Episodes</button></td>
        <td><button type="button" onClick={() => props.sortByHeading('department')}>Department</button></td>
      </tr> 
  );
}

export default TableHeader; 