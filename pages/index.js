import React from 'react';
import {Typography} from "@material-ui/core";
import Layout from "../components/layout/Layout";

function IndexPage(props){
    return (
        <Layout>
            <div>
                <Typography variant="h1">
                    Index Page
                </Typography>
            </div>
        </Layout>
    )
}

export default IndexPage;