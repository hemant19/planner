import * as React from 'react';
import Typography from '@mui/material/Typography';
import AuthGuard from '../components/AuthGuard';

export default function Dashboard() {
  return (
    <AuthGuard>
      <Typography variant="h4" component="h1" sx={{ p: 2 }}>
        Dashboard
      </Typography>
    </AuthGuard>
  );
}
