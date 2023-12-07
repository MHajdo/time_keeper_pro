import { Table } from "react-bootstrap";

function Results({generated_data}) {

  return (
    <>
      {generated_data.map((user_data) => (<div>
          <h2>{user_data.name}</h2>
        <Table bordered striped hover>
          <tr>
            <th>Dan</th>
            <th>Prihod</th>
            <th>Odhod</th>
          </tr>
          {user_data.attendance.map((daily_row) => (
          <tr>
            <td>{daily_row.day}</td>
            <td>{daily_row.arrived}</td>
            <td>{daily_row.departed}</td>
          </tr>
          ))}
        </Table>
      </div>
      ))}
    </>
  );
}

export default Results;
