import React from 'react';
import "./style.css";

const Table = (props) => {

  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {props.displayUsers[0] &&
          props.displayUsers.map(user => {
            return (
              <tr>
                <td><img src={user.picture.medium} alt="employee"></img></td>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

export default Table;