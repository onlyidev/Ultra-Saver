import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserProvider";

export default function UserProps() {
  const [user, setUser] = useContext(UserContext);
  const [props, setProps] = useState({});

  async function populateData() {
    const data = await fetch("/userinfo", {
      method: "GET",
      headers: {
        Authorization: user.header,
      },
    });
    const json = await data.json();
    setProps(json);
  }

  useEffect(() => {
    populateData();
  }, []);

  return Object.keys(props).length < 1 ? (
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
