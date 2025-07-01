import * as React from 'react';
import {Grid} from '@mui/material';
import logo from './financial-planner-logo.png';

export default function SitemarkIcon() {
  return (
    <Grid container>
    <Grid size={2}><img src={logo} alt="FP" width="48" height="48" /></Grid>
    <Grid size={10}><h5 >AI Financial Planner</h5></Grid>
    </Grid>
  );
}
