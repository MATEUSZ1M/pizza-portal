import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FaceIcon from '@material-ui/icons/Face';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import styles from './PageNav';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function PageNav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['waiter', 'tables', 'kitchen'].map((text, index) => (
          <ListItem
            component={NavLink}
            to={`${process.env.PUBLIC_URL}/${text}`}
            button
            key={text}
            className={styles.listItem}
          >
            <ListItemIcon>
              {index === 0 ? <FaceIcon />: index === 1 ? <RestaurantMenuIcon/>  : <WhatshotIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  onClick={toggleDrawer(anchor, true)}
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </Typography>
          <Button
            color="inherit"
            component={NavLink}
            exact
            to={`${process.env.PUBLIC_URL}/`}
            activeClassName="active"
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to={`${process.env.PUBLIC_URL}/login`}
            activeClassName="active"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
