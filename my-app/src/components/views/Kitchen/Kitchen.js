import React from 'react';
import styles from './Kitchen.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Kitchen = () => {
  return (
    <div className={styles.component}>
      <h2>Kitchen</h2>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Table</TableCell>
              <TableCell>Order</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow component="th" scope="row">
              <TableCell>1</TableCell>
              <TableCell>4</TableCell>
              <TableCell>
                <TableRow>Pizza Peperoni</TableRow>
              </TableCell>
              <TableCell>
                <Button>Done</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Kitchen;
