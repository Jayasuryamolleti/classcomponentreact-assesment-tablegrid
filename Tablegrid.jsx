import React, { Component } from "react";

class TableGrid extends Component {
 
  rows = [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    ["C1", "C2", "C3", "C4"],
    ["D1", "D2", "D3", "D4"],
  ];

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>simple table component using clsss</h2>
        <h3>Table Grid for Jaysurya</h3>
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Col 1</th>
              <th>Col 2</th>
              <th>Col 3</th>
              <th>Col 4</th>
            </tr>
          </thead>
          <tbody>
            {this.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableGrid;
