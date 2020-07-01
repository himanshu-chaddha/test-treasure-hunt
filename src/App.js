import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowCount: 1,
      colCount: 1,
      matrixRow: [],
      matrixCol: [],
      treasureCordinates: [],
    };
  }

  onRowChange = (e) => {
    this.setState({
      rowCount: e.target.value,
    });
  };

  onColChange = (e) => {
    this.setState({
      colCount: e.target.value,
    });
  };

  handleGenerateMatrix = (e) => {
    let tempRowElements = [];
    let tempColElements = [];
    for (let i = 0; i < this.state.rowCount; i++) {
      tempRowElements.push(i);
    }
    for (let j = 0; j < this.state.colCount; j++) {
      tempColElements.push(j);
    }
    this.setState({
      matrixRow: tempRowElements,
      matrixCol: tempColElements,
    });
  };

  handleResetMatrix = (e) => {
    let tempRowElements = [];
    let tempColElements = [];
    this.setState({
      matrixRow: tempRowElements,
      matrixCol: tempColElements,
      treasureCordinates: [],
    });
  };

  onPlotClickHandler = (row, col) => {
    let obj = { row, col };
    let tempTreasure = [...this.state.treasureCordinates];
    tempTreasure.push(obj);
    this.setState(
      {
        treasureCordinates: tempTreasure,
      },
      () => {
        console.log(this.state.treasureCordinates);
      }
    );
  };
  render() {
    return (
      <div id="app">
        <div className="row" style={{ margin: "10px 10px 10px 35%" }}>
          Row :{" "}
          <input
            min="1"
            max="25"
            type="number"
            value={this.state.rowCount}
            onChange={this.onRowChange}
            style={{ marginRight: "10px" }}
          />
          Column :{" "}
          <input
            min="1"
            max="25"
            type="number"
            value={this.state.colCount}
            onChange={this.onColChange}
            style={{ marginRight: "10px" }}
          />
          <button
            onClick={this.handleGenerateMatrix}
            style={{ marginRight: "10px" }}
          >
            Create Grid
          </button>
          <button onClick={this.handleResetMatrix}>Reset</button>
        </div>

        <div className="row" style={{ padding: "0% 0% 0% 2%" }}>
          <table id="mytable">
            <tbody>
              {this.state.matrixRow.map((row) => {
                return (
                  <tr key={"r1" + row}>
                    {this.state.matrixCol.map((col) => {
                      return (
                        <td
                          key={"r1" + col}
                          style={{ border: "1px solid black", padding: "10px" }}
                          onClick={() => this.onPlotClickHandler(row, col)}
                        >
                          ( {row}, {col} )
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <hr />
        <div className="row" style={{ margin: "10px 10px 10px 35%" }}>
          Treasure Cordinates Selected :-{" "}
          {this.state.treasureCordinates.length
            ? this.state.treasureCordinates.map((item) => {
                return (
                  <span style={{marginLeft:"10px"}}>
                    ( {item.row}, {item.col} )
                  </span>
                );
              })
            : <span>None Selectred</span>}
        </div>
      </div>
    );
  }
}
