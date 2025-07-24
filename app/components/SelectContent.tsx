import * as React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import MuiListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import { Box } from '@mui/material';

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: 28,
  height: 28,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.secondary,
  border: `1px solid ${(theme.vars || theme).palette.divider}`,
}));

const ListItemAvatar = styled(MuiListItemAvatar)({
  minWidth: 0,
  marginRight: 12,
});

export default function SelectContent() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        p: 1,
        maxHeight: 56,
        width: 215,
      }}
    >
      <ListItemAvatar>
        <Avatar alt="AI Financial Planner">
          <DevicesRoundedIcon sx={{ fontSize: '1rem' }} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="AI Financial Planner" secondary="Web app" />
    </Box>
  );
}
