import React from "react";

import Layout from "./components/Layout.tsx"
import Hello from "./components/Hello.tsx";
import Header from "./components/Header.tsx";
import './App.css'


function App() {
  return (
    <>
      <Layout>
        <Layout.Header>
          <Header title="Header title" subtitle="Header subtitle"></Header>
        </Layout.Header>
        <Layout.Content>
          <button className="btn-primary">My Button</button>
          <Hello name="Viktor"></Hello>
        </Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </>
  )
}

export default App
