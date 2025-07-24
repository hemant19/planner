import * as React from 'react';
import { Navigate } from 'react-router-dom';

export default function DashboardIndex() {
  return <Navigate to="overview" replace />;
}
