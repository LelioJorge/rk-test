import React from "react";
import ListCoin from "./ListCoin"; // importa o componente
import './App.css'; // mantém os estilos existentes (opcional)

function App() {
  const sections = [
    {
      id: 1,
      title: "Fruits",
      items: [
        {  id: 1, name: "Apple", icon: "🍎" },
        {  id: 2, name: "Banana", icon: "🍌" },
      ],
    },
    {
      id: 2,
      title: "Vegetables",
      items: [
        {  id: 1, name: "Broccoli", icon: "🥦" },
        {  id: 2, name: "Carrot", icon: "🥕" },
      ],
    },
  ];

  return (
    <div className="App" style={{ color: "black", padding: "1px", fontFamily: "Arial" }}>
      <ListCoin sections={sections} />
    </div>
  );
}

export default App;
