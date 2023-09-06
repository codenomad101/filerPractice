import React from "react";

const Table = ({ data, query }) => {
  return (
    <table
      style={{
        padding: "2",
        columnGap: "2px",
        rowSpan: "2",
        // border: "1px solid black",
        width: "100%",
      }}
    >
      <tbody>
        <tr style={{ border: "1px solid gray" }}>
          <th>Name</th>
          <th>surname</th>
          <th>email</th>
        </tr>
        {data
          .filter(
            (item) =>
              item.first_name.toLowerCase().includes(query) ||
              item.last_name.toLowerCase().includes(query) ||
              item.email.toLowerCase().includes(query)
          )
          .map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
