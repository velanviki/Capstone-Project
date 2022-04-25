import { Container,Paper } from '@material-ui/core'
import React from 'react';
import makeStyles from "./styles";

function Page() {
    const classes = makeStyles();
  return (
    <Container>
        <Paper className={classes.paper} elevation={3}>
<h2>Log In Successfully!!</h2>
        </Paper>
    </Container>
  )
}

export default Page