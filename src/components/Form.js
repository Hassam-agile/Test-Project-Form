import "./Form.css";
import { useState } from "react";

function Form() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [artists, setArtists] = useState([]);
  return (
    <>
      <input
        className="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button
        className="button"
        onClick={() => {
          setId(artists.length + 1);
          setName("");
          setAge("");

          artists.push({
            id: id,
            name: name,
            age: age,
          });
        }}
      >
        Submit
      </button>
      <table>
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {artists.map((artist, key) => (
          <>
            <tr>
              <td key={artist.id}>{artist.id}</td>
              <td>{artist.name}</td>
              <td>{artist.age}</td>
              <td>
                <button type="edit">Edit</button>
              </td>
              <td>
                <button type="delete">Delete</button>
              </td>
            </tr>
          </>
        ))}
      </table>
    </>
  );
}
export default Form;
