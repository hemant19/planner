import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AddAssetForm from '../../components/AddAssetForm';
import AssetCard from '../../components/AssetCard';
import type { Asset } from '../../models/assets';

export default function Overview() {
  const [open, setOpen] = React.useState(false);
  const [assets, setAssets] = React.useState<Asset[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddAsset = (newAsset: Asset) => {
    setAssets((prevAssets) => [...prevAssets, newAsset]);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Overview
      </Typography>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Asset
      </Button>
      <AddAssetForm open={open} onClose={handleClose} onAddAsset={handleAddAsset} />

      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Value</TableCell>
                <TableCell>Purchase Date</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assets.map((asset) => (
                <TableRow
                  key={asset.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {asset.type.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                  </TableCell>
                  <TableCell>{asset.value}</TableCell>
                  <TableCell>{asset.purchaseDate.toLocaleDateString()}</TableCell>
                  <TableCell>
                    {/* Render specific details based on asset type */}
                    {asset.type === 'indian_stocks' && `Ticker: ${(asset as any).ticker}, Quantity: ${(asset as any).quantity}`}
                    {asset.type === 'indian_mutual_funds' && `Name: ${(asset as any).name}, Folio: ${(asset as any).folioNumber}`}
                    {asset.type === 'indian_bank_deposit' && `Bank: ${(asset as any).bankName}, Account: ${(asset as any).accountNumber}`}
                    {asset.type === 'us_stocks' && `Ticker: ${(asset as any).ticker}, Quantity: ${(asset as any).quantity}`}
                    {asset.type === 'rsu' && `Company: ${(asset as any).company}, Grant: ${(asset as any).grantDate.toLocaleDateString()}, Vesting: ${(asset as any).vestingDate.toLocaleDateString()}`}
                    {asset.type === 'real_estate' && `Address: ${(asset as any).address}`}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <div style={{ marginTop: '16px' }}>
          {assets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      </Box>
    </>
  );
}
