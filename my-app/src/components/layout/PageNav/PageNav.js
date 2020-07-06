import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.scss';
import Button from '@material-ui/core/Button';

const PageNav = () => {
  return (
    <nav className={styles.component}>
      <Button
        className={styles.link}
        component={NavLink}
        exact
        to={`${process.env.PUBLIC_URL}/`}
        activeClassName="active"
      >
        Dashboard
      </Button>

      <Button
        className={styles.link}
        component={NavLink}
        to={`${process.env.PUBLIC_URL}/login`}
        activeClassName="active"
      >
        Login
      </Button>
    </nav>
  );
};

export default PageNav;

/* <NavLink to={`${process.env.PUBLIC_URL}/table`} activeClassName="active">
        Table
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName="active">
        Waiter
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName="active">
        Kitchen
      </NavLink> */
