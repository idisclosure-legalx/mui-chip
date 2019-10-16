import React from 'react';
import { Avatar, Chip, Typography, Grid } from '@material-ui/core';
import { Face } from '@material-ui/icons';

function Home() {
  return (
    <Grid container justify="center">
      <Grid xs={11} md={8} style={{ paddingTop: '20vh' }}>
        <Typography>
          Chip Demo
        </Typography>
        <Chip
          avatar={<Avatar><Face /></Avatar>}
          label="Unassigned"
          variant="outlined"
        />
        <Chip
          avatar={<Avatar><Face /></Avatar>}
          label="Unassigned"
          variant="outlined"
          size="small"
        />
      </Grid>
    </Grid>
  );
}

export default Home
