import React from 'react';
import styles from './Kitchen.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  { id: '1', order: '1', meal: 'pizza peperoni extra salami' },
  { id: '2', order: '4', meal: 'salad' },
  { id: '3', order: 'Online-234', meal: 'hot dog' },
  { id: '4', order: '1', meal: 'sup' },
  { id: '5', order: '3', meal: 'pizza salami' },
  { id: '6', order: '4', meal: 'chesecake' },
];

const Kitchen = () => {
  return (
    <div className={styles.component}>
      <h2>Kitchen</h2>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Table/Order</TableCell>
              <TableCell>Order</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.order}</TableCell>
                <TableCell>{row.meal}</TableCell>
                <TableCell>
                  <Button>In preparation</Button>
                  <Button>Done</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Kitchen;
