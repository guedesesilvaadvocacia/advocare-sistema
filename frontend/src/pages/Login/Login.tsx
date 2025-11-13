import React, { useState } from "react";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      const data = await res.json();
      if (data.ok) {
        setMsg("✅ " + data.message);
        onLoginSuccess(); // redireciona ao dashboard
      } else {
        setMsg("❌ " + data.message);
      }
    } catch (err) {
      setMsg("❌ Erro ao conectar ao servidor");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login do Sistema Jurídico</h2>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "0 auto",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{ marginTop: "10px" }}
        />
        <button type="submit" style={{ marginTop: "10px" }}>
          Entrar
        </button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
