import React, {useState} from 'react';
import {TextField, Typography, Button} from "@material-ui/core";
import Layout from "../components/layout/Layout";

function ContactPage(props) {
    const styles = {
        caption: {
            width: '10%',
            display: 'inline-block',
            marginBottom: 20,
            flexGrow: 1
        },
        textInputField: {
            width: '70%',
            display: 'inline-block',
            marginBottom: 20,
            flexGrow: 1
        },
        button: {
            width: '40%',
            color: 'white',
            backgroundColor: '#512DA8',
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center'

        },
        outerDiv: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100vw',
            flexGrow: 1,
            minHeight: '100vh',
            alignItems: 'center',
            marginBottom: 20,
            justify: 'center'
        },
        innerDiv: {
            width: '60%'

        },
        buttonDiv: {
            display: 'flex',
            justify: 'center',
            justifyContent: 'center',
            alignItems: 'center'
        },
        captionTextStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#512DA8',
            textAlign: 'center'
        }
    };
    const [contact, setContact] = useState({});

    function handleChange(e) {

    }

    return (
        <Layout>
            <div style={styles.outerDiv}>
                <div style={styles.innerDiv}>
                    <Typography variant="body2" style={styles.captionTextStyle} gutterBottom>
                        Have any issues or any enquiries?
                    </Typography>
                    <Typography variant="body2" style={styles.captionTextStyle} gutterBottom>
                        Our Virtual Assistant and Customer Care Team are ever ready to
                        assist you.
                    </Typography>

                    <div>
                        <Typography variant="caption" style={styles.caption}>
                            Name
                        </Typography>
                        <TextField
                            style={styles.textInputField}
                            variant="outlined"
                            placeholder="Enter your Full Name"
                            label="Name"
                            fullWidth
                            value={contact.name}
                            margin="dense"
                        />
                    </div>

                    <div>

                        <Typography variant="caption" style={styles.caption}>
                            Contact Number
                        </Typography>

                        <TextField
                            style={styles.textInputField}
                            variant="outlined"
                            placeholder="Enter your Contact Number"
                            label="Contact"
                            fullWidth
                            value={contact.number}
                            margin="dense"
                        />

                    </div>

                    <div>

                        <Typography variant="caption" style={styles.caption}>
                            Contact Number
                        </Typography>

                        <TextField
                            style={styles.textInputField}
                            variant="outlined"
                            multiline
                            rows={5}
                            fullWidth
                            placeholder="Enter your Message Here"
                            label="Message"
                            value={contact.message}
                        />
                    </div>

                    <div style={styles.buttonDiv}>
                        <Button size="medium" variant="contained" style={styles.button}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage;