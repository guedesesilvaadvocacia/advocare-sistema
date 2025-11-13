import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <section className="content">
          <h1>Bem-vindo ao Painel do Sistema</h1>
          <p>Login realizado com sucesso!</p>
        </section>
      </div>
    </div>
  );
}
