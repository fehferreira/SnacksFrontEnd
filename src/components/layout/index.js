import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

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
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className="layout__container">        
        <div className={classes.root}>
        <AppBar position="static">
            <div className="title">CONTROLE DE APERITIVOS</div>
        </AppBar>
        
        </div>
        <div className="content">
          {props.children}
        </div>
    </div>
  );
}

export default Layout