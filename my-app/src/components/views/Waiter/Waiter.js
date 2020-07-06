import React from 'react';
import styles from './Waiter.scss';
import {Link} from 'react-router-dom';


const Waiter = (id) => {
  return (
    <div className={styles.component}>
      <h2>Waiter:</h2>
      <Link to={'/waiter/order/new'}> New Order</Link>
      <Link to={`/waiter/order/${id}`}> Table</Link>
    </div>
  );
};

export default Waiter;
