import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { AssetType } from '../models/assets';

interface AddAssetFormProps {
  open: boolean;
  onClose: () => void;
}

export default function AddAssetForm({ open, onClose }: AddAssetFormProps) {
  const [assetType, setAssetType] = React.useState<AssetType | ''>(AssetType.INDIAN_STOCKS);

  const handleAssetTypeChange = (event: any) => {
    setAssetType(event.target.value as AssetType);
  };

  const renderAssetFields = () => {
    switch (assetType) {
      case AssetType.INDIAN_STOCKS:
        return (
          <>
            <TextField autoFocus margin="dense" id="ticker" label="Ticker" type="text" fullWidth />
            <TextField margin="dense" id="quantity" label="Quantity" type="number" fullWidth />
            <TextField margin="dense" id="value" label="Value" type="number" fullWidth />
            <TextField margin="dense" id="purchaseDate" label="Purchase Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
          </>
        );
      case AssetType.INDIAN_MUTUAL_FUNDS:
        return (
          <>
            <TextField autoFocus margin="dense" id="name" label="Name" type="text" fullWidth />
            <TextField margin="dense" id="folioNumber" label="Folio Number" type="text" fullWidth />
            <TextField margin="dense" id="value" label="Value" type="number" fullWidth />
            <TextField margin="dense" id="purchaseDate" label="Purchase Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
          </>
        );
      case AssetType.INDIAN_BANK_DEPOSIT:
        return (
          <>
            <TextField autoFocus margin="dense" id="bankName" label="Bank Name" type="text" fullWidth />
            <TextField margin="dense" id="accountNumber" label="Account Number" type="text" fullWidth />
            <TextField margin="dense" id="value" label="Value" type="number" fullWidth />
            <TextField margin="dense" id="purchaseDate" label="Purchase Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
          </>
        );
      case AssetType.US_STOCKS:
        return (
          <>
            <TextField autoFocus margin="dense" id="ticker" label="Ticker" type="text" fullWidth />
            <TextField margin="dense" id="quantity" label="Quantity" type="number" fullWidth />
            <TextField margin="dense" id="value" label="Value" type="number" fullWidth />
            <TextField margin="dense" id="purchaseDate" label="Purchase Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
          </>
        );
      case AssetType.RSU:
        return (
          <>
            <TextField autoFocus margin="dense" id="company" label="Company" type="text" fullWidth />
            <TextField margin="dense" id="grantDate" label="Grant Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
            <TextField margin="dense" id="vestingDate" label="Vesting Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
            <TextField margin="dense" id="value" label="Value" type="number" fullWidth />
            <TextField margin="dense" id="purchaseDate" label="Purchase Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
          </>
        );
      case AssetType.REAL_ESTATE:
        return (
          <>
            <TextField autoFocus margin="dense" id="address" label="Address" type="text" fullWidth />
            <TextField margin="dense" id="value" label="Value" type="number" fullWidth />
            <TextField margin="dense" id="purchaseDate" label="Purchase Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Asset</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <InputLabel id="asset-type-label">Asset Type</InputLabel>
          <Select
            labelId="asset-type-label"
            id="asset-type"
            value={assetType}
            onChange={handleAssetTypeChange}
          >
            {Object.values(AssetType).map((type) => (
              <MenuItem key={type} value={type}>
                {type.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {renderAssetFields()}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
