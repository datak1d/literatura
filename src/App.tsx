import React from "react";

import Layout from "./components/Layout.tsx";
import Hello from "./components/Hello.tsx";
import Nav from "./components/Nav.tsx";
import Alert from "./components/Alert.tsx";
import LoginForm from "./components/LoginForm.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Layout.Header>
          <div className="container mx-auto px-4">
            <span className="text-3xl font-extrabold italic text-white">
              Literatura
            </span>
            <Nav></Nav>
          </div>
        </Layout.Header>
        <Layout.Content>
          <div className="container mx-auto px-4">
            <div className="my-4">
              <Hello name="Viktor"></Hello>

              <Alert>
                <Alert.Title>Ошибка</Alert.Title>
                <Alert.Description>Что-то пошло не так</Alert.Description>
              </Alert>
            </div>
            <div>
              <LoginForm></LoginForm>
            </div>
          </div>
        </Layout.Content>
        <Layout.Footer>
          <span>&copy; 2025 — {new Date().getFullYear()}</span>
        </Layout.Footer>
      </Layout>
    </>
  );
}

export default App;
