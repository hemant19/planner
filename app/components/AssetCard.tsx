import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { Asset } from '../../models/assets';

interface AssetCardProps {
  asset: Asset;
}

const renderAssetDetails = (asset: Asset) => {
  switch (asset.type) {
    case 'indian_stocks':
      return `Ticker: ${(asset as any).ticker}, Quantity: ${(asset as any).quantity}`;
    case 'indian_mutual_funds':
      return `Name: ${(asset as any).name}, Folio: ${(asset as any).folioNumber}`;
    case 'indian_bank_deposit':
      return `Bank: ${(asset as any).bankName}, Account: ${(asset as any).accountNumber}`;
    case 'us_stocks':
      return `Ticker: ${(asset as any).ticker}, Quantity: ${(asset as any).quantity}`;
    case 'rsu':
      return `Company: ${(asset as any).company}, Grant: ${(asset as any).grantDate.toLocaleDateString()}, Vesting: ${(asset as any).vestingDate.toLocaleDateString()}`;
    case 'real_estate':
      return `Address: ${(asset as any).address}`;
    default:
      return '';
  }
};

export default function AssetCard({ asset }: AssetCardProps) {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {asset.type.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Value: {asset.value}
        </Typography>
        <Typography variant="body2">
          Purchase Date: {asset.purchaseDate.toLocaleDateString()}
        </Typography>
        <Typography variant="body2">
          Details: {renderAssetDetails(asset)}
        </Typography>
      </CardContent>
    </Card>
  );
}
