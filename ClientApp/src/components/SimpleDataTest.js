import { useEffect, useState } from "react";

function SimpleDataTest(props) {
  const [state, setState] = useState({ data: [], loading: true });

  const populateData = async () => {
    const data = await (await fetch("simpledatatest")).json();
    setState({ data: data, loading: false });
  };

  useEffect(() => {
    populateData();
  }, []);

  return (
    <>
      <h1>Database Demo</h1>
      <p>
        This component gets data from a server API which itself gets data from a
        PostgreSQL database.
      </p>
      <button className="btn btn-primary" onClick={populateData}>
        Reload
      </button>
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {state.data.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default SimpleDataTest;
