import React from "react";

const ReadOnlyRow = ({ data, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, data)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(data.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
