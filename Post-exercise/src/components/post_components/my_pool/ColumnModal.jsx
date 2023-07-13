import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SortIcon from '@mui/icons-material/Sort';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Rating, Typography } from "@mui/material";

class ColumnModal extends React.Component {
  render() {
    const {
      tableIndex,
      columnData,
      addPostToColumn,
      sortColumn,
      removePostFromColumn,
    } = this.props;

    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>Table {tableIndex + 1}</Typography>
              </TableCell>
              <TableCell>
                <Button onClick={() => addPostToColumn(tableIndex)}><AddIcon /></Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => sortColumn(tableIndex)}><SortIcon /></Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {columnData.length > 0 &&
              columnData.map((commentInfo, index) => {
                return (
                  <TableRow key={Math.random()}>
                    <TableCell>
                      <Rating
                        name={`half-rating-${commentInfo.avgRating}`}
                        precision={0.1}
                        value={commentInfo.avgRating}
                        readOnly
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => removePostFromColumn(tableIndex, index)}
                      >
                    <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default ColumnModal;
