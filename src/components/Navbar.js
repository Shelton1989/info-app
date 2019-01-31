import React, {Component} from 'react';
import './Navbar.css';
import logo from '../img/sw-logo.png';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
};

function SimpleAppBar(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <div className="container">
            <a href="./index.html"><img className="logo" src={logo}></img></a>
          </div>
        </AppBar>
      </div>
    );
  }
  
  SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleAppBar);