import * as React from "react";
import { Container, Grid } from "@mui/material";
import Sidebar from "./sidebar";
export default function Layout({children}){
    return(
        <React.Fragment>
        <Container maxWidth="false" >
        <Grid container spacing={2} sx={{bgcolor:"#FAF8F1"}}>
            <Grid item xs={2.5}>
                <Sidebar/>
            </Grid>
            <Grid item xs={9.5}>
                {children}
            </Grid>
        </Grid>
        </Container>
      </React.Fragment>
    );
}