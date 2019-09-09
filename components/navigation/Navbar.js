import React from 'react';
import {AppBar, Toolbar, Avatar, Typography, Grid, Button, makeStyles} from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles({
    button: {
        textTransform: 'Capitalize',
        fontWeight: 'bold'
    },
    navBar: {
        color: '#ffffff',
        backgroundColor: '#512DA8'
    }
});
const styles = {
    button: {
        textTransform: 'Capitalize',
        fontWeight: 'bold'
    },
    navBar: {
        color: '#ffffff',
        backgroundColor: '#512DA8'
    }
};

function Navbar(props) {

    const styles1 = useStyles();

    return (
        <div>
            <AppBar position="fixed" style={styles.navBar}>
                <Toolbar variant="dense">
                    <Grid container direction="row" justify="space-around">
                        <Grid item>
                            <Typography variant="h6" color="inherit" style={{fontWeight: 'bolder'}}>
                                Virtual Assistant and Call Center
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Link href="/">
                                <Button
                                    style={styles.button}
                                    variant="text"
                                    color="inherit"
                                    size="medium">
                                    Home
                                </Button>
                            </Link>

                            <Link href="/request-job">
                                <Button
                                    style={styles.button}
                                    variant="text"
                                    color="inherit"
                                    size="medium">
                                    Request Job
                                </Button>
                            </Link>

                            <Link href="/active-jobs">
                                <Button
                                    style={styles.button}
                                    variant="text"
                                    color="inherit"
                                    size="medium">
                                    Active Jobs Requests
                                </Button>
                            </Link>

                            <Link href="/past-jobs">
                                <Button
                                    style={styles.button}
                                    variant="text"
                                    color="inherit"
                                    size="medium">
                                    Past Job Requests
                                </Button>
                            </Link>

                            <Link href="/contact">
                                <Button
                                    style={styles.button}
                                    variant="text"
                                    color="inherit"
                                    size="medium">
                                    Contact Us
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>


                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;