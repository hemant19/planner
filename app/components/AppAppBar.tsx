import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import logo from '../assets/financial-planner-logo.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { type User } from 'firebase/auth';
import SideMenuMobile from './SideMenuMobile';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const { user, signOut }: { user: User | null, signOut: () => void } = useAuth();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 3, px: 0 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>  
              <Box sx={{ display:  'flex' }}>
                <img src={logo} alt="FP" width="48" height="48" />
                <Typography color="primary" variant="h5" margin="auto">
                  AI Financial Advisor
                </Typography>
              </Box>
            </Link>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to={"/#features"}>
                <Button variant="text" color="info" size="small">
                  Features
                </Button>
              </Link>
              <Link to={"/#highlights"}>
              <Button variant="text" color="info" size="small">
                Highlights
              </Button>
              </Link>
              <Link to={"/#pricing"}>
              <Button variant="text" color="info" size="small">
                Pricing
              </Button>
              </Link>
              <Link to={"/#faq"}>
                <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                  FAQ
                </Button>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            {user ? (
              <>
                <Button color="primary" variant="text" size="small" onClick={signOut}>
                  Sign out
                </Button>
                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Avatar alt={user.displayName || undefined} src={user.photoURL || undefined}/>
                </Link>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <Button color="primary" variant="text" size="small">
                    Sign in
                  </Button>
                </Link>
                <Button color="primary" variant="contained" size="small">
                  Sign up
                </Button>
              </>
            )}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <SideMenuMobile open={open} toggleDrawer={toggleDrawer} />
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
