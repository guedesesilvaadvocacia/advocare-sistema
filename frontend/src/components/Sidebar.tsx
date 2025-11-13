import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="/dashboard">🏠 Painel</a></li>
        <li><a href="/cadastros">👤 Cadastros</a></li>
        <li><a href="/config">⚙️ Configurações</a></li>
      </ul>
    </aside>
  );
}
