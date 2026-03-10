import React from "react";

const ListCoin = ({ sections }) => {
  return (
    <table>
      <tbody>
        {sections.map((section) => (
          <React.Fragment key={section.id}>
            {/* Cabeçalho da seção */}
            <tr>
              <th colSpan="2">{section.title}</th>
            </tr>

            {/* Itens da seção */}
            {section.items.map((item) => (
              <tr key={item.id}>
                <td>{item.icon}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ListCoin;



//<h2 style={{ color: "blue" }}>{section.title}</h2>
 