import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddAssetForm from '../../components/AddAssetForm';

export default function Overview() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Overview
      </Typography>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Asset
      </Button>
      <AddAssetForm open={open} onClose={handleClose} />
    </>
  );
}