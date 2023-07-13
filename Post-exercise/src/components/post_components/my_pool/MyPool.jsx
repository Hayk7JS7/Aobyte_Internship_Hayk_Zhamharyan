import React, { Component } from "react";
import { Box } from "@mui/material";
import { posts } from "../../../data/data";
import ColumnModal from "./ColumnModal";

class MyPool extends Component {
  state = {
    pool: [...posts],
    columns: [[], []],
  };

  addPostToColumn = (columnIndex) => {
    const pool = [...this.state.pool];
    const columns = [...this.state.columns];

    if (pool.length > 0) {
      let highestRatedPostIndex = 0;
      for (let i = 1; i < pool.length; i++) {
        if (pool[i].avgRating > pool[highestRatedPostIndex].avgRating) {
          highestRatedPostIndex = i;
        }
      }
      const [highestRatedPost] = pool.splice(highestRatedPostIndex, 1);
      columns[columnIndex].push(highestRatedPost);

      this.setState({ pool, columns });
    }
  };

  sortColumn = (columnIndex) => {
    const columns = [...this.state.columns];
    const column = columns[columnIndex];
    const isDescending = column[0]?.avgRating > column[1]?.avgRating;
    const sortedColumn = [...column].sort((postA, postB) => {
      return isDescending
        ? postA.avgRating - postB.avgRating
        : postB.avgRating - postA.avgRating;
    });
    columns[columnIndex] = sortedColumn;
    this.setState({ columns });
  };

  removePostFromColumn = (columnIndex, postIndex) => {
    const columns = [...this.state.columns];
    const removedPost = columns[columnIndex].splice(postIndex, 1)[0];
    const pool = [...this.state.pool, removedPost];

    this.setState({ pool, columns });
  };

  render() {
    const { columns } = this.state;
    {console.log(this.state.pool)}
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "5rem",
        }}
      >
        {columns.map((column, index) => (
          <ColumnModal
            key={index}
            tableIndex={index}
            columnData={column}
            addPostToColumn={this.addPostToColumn}
            sortColumn={this.sortColumn}
            removePostFromColumn={this.removePostFromColumn}
          />
        ))}
      </Box>
    );
  }
}

export default MyPool;
