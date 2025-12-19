import React from "react";

import Layout from "./components/Layout.tsx"
import Hello from "./components/Hello.tsx";
import Nav from "./components/Nav.tsx";
import './App.css'


function App() {
  return (
    <>
      <Layout>
        <Layout.Header>
          <div className="text-3xl font-extrabold italic text-white">
          Literatura
        </div>
          <Nav></Nav>
        </Layout.Header>
        <Layout.Content>
          <div className="container mx-auto px-4">
            <Hello name="Viktor"></Hello>
            <button className="btn btn-primary">My Button</button>
          </div>
        </Layout.Content>
        <Layout.Footer>
          <span>&copy; 2025 — {new Date().getFullYear()}</span>
        </Layout.Footer>
      </Layout>
    </>
  )
}

export default App
