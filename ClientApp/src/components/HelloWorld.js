import React, { Component } from 'react';

export class HelloWorld extends Component {

  constructor(props) {
    super(props);
    this.state = { HelloWorld: "", loading: true };
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.state.HelloWorld;

    return (
      <div>
        <h1 id="tabelLabel" >Hello World API</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async getData() {
    const response = await fetch('helloback');
    const data = await response.text();
    console.log(response);
    this.setState({ HelloWorld: data.toUpperCase(), loading: false });
  }
}
