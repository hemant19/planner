
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import SignInCard from '../components/SignInCard';
import Content from '../components/Content';
import AppAppBar from '../components/AppAppBar';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export default function SignInSide(props: { disableCustomTheme?: boolean }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <CircularProgress />
  }

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Stack
        direction="column"
        component="main"
        sx={[
          {
            justifyContent: 'center',
            height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
            marginTop: 'max(100px - var(--template-frame-height, 0px), 0px)',
            minHeight: '100%',
          },
          (theme) => ({
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              zIndex: -1,
              inset: 0,
              backgroundImage:
                'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
              backgroundRepeat: 'no-repeat',
              ...theme.applyStyles('dark', {
                backgroundImage:
                  'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
              }),
            },
          }),
        ]}
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            justifyContent: 'center',
            gap: { xs: 6, sm: 12 },
            p: 2,
            mx: 'auto',
          }}
        >
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
              justifyContent: 'center',
              gap: { xs: 6, sm: 12 },
              p: { xs: 2, sm: 4 },
              m: 'auto',
            }}
          >
            <Content />
            <SignInCard />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

