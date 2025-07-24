import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { Link, useLocation } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';

const mainListItems = [
  { text: 'Overview', icon: <HomeRoundedIcon />, to: '/dashboard/overview' },
  { text: 'Equity Portfolio', icon: <ShowChartRoundedIcon />, to: '/dashboard/equity' },
  { text: 'Transactions', icon: <ReceiptRoundedIcon />, to: '/dashboard/transactions' },
];

export default function MenuContent() {
  const location = useLocation();
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton component={Link} to={item.to} selected={location.pathname === item.to}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
