import React from "react";

import {Grid} from '@material-ui/core';
import Navbar from "../navigation/Navbar";

function Layout(props){

    const styles = {
        navBar: {
            marginBottom: 35
        }
    };
    return (
        <Grid container direction="column">

            <Grid item style={styles.navBar}>
                <Navbar/>
            </Grid>

            <Grid item>
                {props.children}
            </Grid>

        </Grid>
    )
}

export default Layout;