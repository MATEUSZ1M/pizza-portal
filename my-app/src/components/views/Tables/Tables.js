import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.scss';

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables</h2>
      <Link to={'/table/booking'}>Booking</Link>
      <Link to={'/table/events'}>Events</Link>
    </div>
  );
};

export default Tables;
