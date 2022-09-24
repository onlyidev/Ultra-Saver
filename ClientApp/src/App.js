import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Layout } from "./components/Layout";
import { UserProvider } from "./contexts/UserProvider";
import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      // We wrap everything with UserProvider because UserProvider is what provides the global user state
      <UserProvider>
        <Layout>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
        </Layout>
      </UserProvider>
    );
  }
}
