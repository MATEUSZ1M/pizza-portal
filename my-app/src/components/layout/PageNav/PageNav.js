import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './PageNav.module.scss';

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
