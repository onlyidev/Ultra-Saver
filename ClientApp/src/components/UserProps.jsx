/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserProvider';

export default function UserProps() {
  const [user] = useContext(UserContext); // Global user state
  const [props, setProps] = useState({});
  const [tableState, setTableState] = useState({ loading: true, error: false });

  async function populateData() {
    const data = await fetch('/userinfo', {
      // In order to get data from a restricted API we need to provide an Authorization header
      method: 'GET',
      headers: {
        Authorization: user.header
      }
    });
    if (data.status !== 200) {
      setTableState({ ...tableState, error: true });
    } else {
      const json = await data.json();
      setProps(json);
      setTableState({ ...tableState, loading: false });
    }
  }

  useEffect(() => {
    populateData();
  }, []);

  if (tableState.error) return <h3 style={{ color: 'red' }}>An error has occured...</h3>;

  return tableState.loading ? (
    <p>Loading...</p>
  ) : (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>email</th>
          <th>Dark Mode</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.email}</td>
          <td>
            <input
              checked={props.darkMode}
              type="checkbox"
              className="form-check w-25"
              onClick={(event) => {
                event.preventDefault();
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
