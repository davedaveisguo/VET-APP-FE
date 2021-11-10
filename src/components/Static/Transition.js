import React from 'react'
import classes from './Transition.module.css'; 
import { Link } from 'react-router-dom';

export default function Transition() {
    return (
        <div className={classes.mySidenav}>
        <Link className={classes.user} to="/userMgt">User Management</Link>
        <a className={classes.animal}>Animal Overview</a>
        <a href="#" className={classes.projects}>Projects</a>
        <a href="#" className={classes.contact}>Contact</a>
        </div>   
    )
}
