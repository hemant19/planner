export interface Asset {
  id: string;
  type: AssetType;
  value: number;
  purchaseDate: Date;
}

export enum AssetType {
  INDIAN_STOCKS = 'indian_stocks',
  INDIAN_MUTUAL_FUNDS = 'indian_mutual_funds',
  INDIAN_BANK_DEPOSIT = 'indian_bank_deposit',
  US_STOCKS = 'us_stocks',
  RSU = 'rsu',
  REAL_ESTATE = 'real_estate',
}

export interface IndianStock extends Asset {
  ticker: string;
  quantity: number;
}

export interface IndianMutualFund extends Asset {
  name: string;
  folioNumber: string;
}

export interface IndianBankDeposit extends Asset {
  bankName: string;
  accountNumber: string;
}

export interface USStock extends Asset {
  ticker: string;
  quantity: number;
}

export interface RSU extends Asset {
  company: string;
  grantDate: Date;
  vestingDate: Date;
}

export interface RealEstate extends Asset {
  address: string;
}
// Added a comment to force re-compilation