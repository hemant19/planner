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
import type { Asset, IndianStock, IndianMutualFund, IndianBankDeposit, USStock, RSU, RealEstate } from '../models/assets.ts';
import { AssetType } from '../models/assets.ts';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

interface AddAssetFormProps {
  open: boolean;
  onClose: () => void;
  onAddAsset: (asset: Asset) => void;
}

export default function AddAssetForm({ open, onClose, onAddAsset }: AddAssetFormProps) {
  const [assetType, setAssetType] = React.useState<AssetType | ''>(AssetType.INDIAN_STOCKS);
  const [ticker, setTicker] = React.useState('');
  const [quantity, setQuantity] = React.useState<number | ''>('');
  const [value, setValue] = React.useState<number | ''>('');
  const [purchaseDate, setPurchaseDate] = React.useState('');
  const [name, setName] = React.useState('');
  const [folioNumber, setFolioNumber] = React.useState('');
  const [bankName, setBankName] = React.useState('');
  const [accountNumber, setAccountNumber] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [grantDate, setGrantDate] = React.useState('');
  const [vestingDate, setVestingDate] = React.useState('');
  const [address, setAddress] = React.useState('');

  const handleAssetTypeChange = (event: any) => {
    setAssetType(event.target.value as AssetType);
    // Reset fields when asset type changes
    setTicker('');
    setQuantity('');
    setValue('');
    setPurchaseDate('');
    setName('');
    setFolioNumber('');
    setBankName('');
    setAccountNumber('');
    setCompany('');
    setGrantDate('');
    setVestingDate('');
    setAddress('');
  };

  const handleSubmit = async () => {
    let newAsset: Asset | null = null;
    const commonProps = { id: Date.now().toString(), type: assetType as AssetType, value: Number(value), purchaseDate: new Date(purchaseDate) };

    switch (assetType) {
      case AssetType.INDIAN_STOCKS:
        newAsset = { ...commonProps, ticker, quantity: Number(quantity) } as IndianStock;
        break;
      case AssetType.INDIAN_MUTUAL_FUNDS:
        newAsset = { ...commonProps, name, folioNumber } as IndianMutualFund;
        break;
      case AssetType.INDIAN_BANK_DEPOSIT:
        newAsset = { ...commonProps, bankName, accountNumber } as IndianBankDeposit;
        break;
      case AssetType.US_STOCKS:
        newAsset = { ...commonProps, ticker, quantity: Number(quantity) } as USStock;
        break;
      case AssetType.RSU:
        newAsset = { ...commonProps, company, grantDate: new Date(grantDate), vestingDate: new Date(vestingDate) } as RSU;
        break;
      case AssetType.REAL_ESTATE:
        newAsset = { ...commonProps, address } as RealEstate;
        break;
      default:
        break;
    }

    if (newAsset) {
      try {
        if (db) {
          await addDoc(collection(db, "assets"), newAsset);
          onAddAsset(newAsset);
          onClose();
        } else {
          console.error("Firestore is not initialized.");
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const renderAssetFields = () => {
    switch (assetType) {
      case AssetType.INDIAN_STOCKS:
        return (
          <>
            <TextField autoFocus margin="dense" id="ticker" label="Ticker" type="text" fullWidth value={ticker} onChange={(e) => setTicker(e.target.value)} />
            <TextField margin="dense" id="quantity" label="Quantity" type="number" fullWidth value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
            <TextField margin="dense" id="value" label="Value" type="number" fullWidth value={value} onChange={(e) => setValue(Number(e.target.value))} />
            <TextField margin="dense" id="purchaseDate" label="Purchase Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
          </>
        );
      case AssetType.INDIAN_MUTUAL_FUNDS:
        return (
          <>
            <TextField autoFocus margin="dense" id="name" label="Name" type="text" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
            <TextField margin="dense" id="folioNumber" label="Folio Number" type="text" fullWidth value={folioNumber} onChange={(e) => setFolioNumber(e.target.value)} />
            <TextField margin="dense" id="value" label="Value" type="number" fullWidth value={value} onChange={(e) => setValue(Number(e.target.value))} />
            <TextField margin="dense" id="purchaseDate" label="Purchase Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
          </>
        );
      case AssetType.INDIAN_BANK_DEPOSIT:
        return (
          <>
            <TextField autoFocus margin="dense" id="bankName" label="Bank Name" type="text" fullWidth value={bankName} onChange={(e) => setBankName(e.target.value)} />
            <TextField margin="dense" id="accountNumber" label="Account Number" type="text" fullWidth value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
            <TextField margin="dense" id="value" label="Value" type="number" fullWidth value={value} onChange={(e) => setValue(Number(e.target.value))} />
            <TextField margin="dense" id="purchaseDate" label="Purchase Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
          </>
        );
      case AssetType.US_STOCKS:
        return (
          <>
            <TextField autoFocus margin="dense" id="ticker" label="Ticker" type="text" fullWidth value={ticker} onChange={(e) => setTicker(e.target.value)} />
            <TextField margin="dense" id="quantity" label="Quantity" type="number" fullWidth value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
            <TextField margin="dense" id="value" label="Value" type="number" fullWidth value={value} onChange={(e) => setValue(Number(e.target.value))} />
            <TextField margin="dense" id="purchaseDate" label="Purchase Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
          </>
        );
      case AssetType.RSU:
        return (
          <>
            <TextField autoFocus margin="dense" id="company" label="Company" type="text" fullWidth value={company} onChange={(e) => setCompany(e.target.value)} />
            <TextField margin="dense" id="grantDate" label="Grant Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={grantDate} onChange={(e) => setGrantDate(e.target.value)} />
            <TextField margin="dense" id="vestingDate" label="Vesting Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={vestingDate} onChange={(e) => setVestingDate(e.target.value)} />
            <TextField margin="dense" id="value" label="Value" type="number" fullWidth value={value} onChange={(e) => setValue(Number(e.target.value))} />
            <TextField margin="dense" id="purchaseDate" label="Purchase Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
          </>
        );
      case AssetType.REAL_ESTATE:
        return (
          <>
            <TextField autoFocus margin="dense" id="address" label="Address" type="text" fullWidth value={address} onChange={(e) => setAddress(e.target.value)} />
            <TextField margin="dense" id="value" label="Value" type="number" fullWidth value={value} onChange={(e) => setValue(Number(e.target.value))} />
            <TextField margin="dense" id="purchaseDate" label="Purchase Date" type="date" fullWidth InputLabelProps={{ shrink: true }} value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
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
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
