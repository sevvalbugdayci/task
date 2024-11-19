'use client';

import React from 'react';
import styled from 'styled-components';
import { Layout, Card } from 'antd';
import SalesOverview from '../components/SalesOverview';
import PurchaseOverview from '../components/PurchaseOverview';
import InventorySummary from '../components/InventorySummary';
import ProductSummary from '../components/ProductSummary';
import SalesPurchase from '../components/SalesPurchase';
import OrderSummary from '../components/OrderSummary';
import TopSellingStock from '../components/TopSellingStock';
import LowQuantityStock from '../components/LowQuantityStock';

const { Content } = Layout;


const DashboardContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 24px;
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: column; 
  }
`;

const LeftPanel = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RightPanel = styled.div`
  flex: 2; 
  display: flex;
  flex-direction: column;
  gap: 10px; 
`;

const StyledCard = styled(Card)`
  margin-bottom: 24px;
  .ant-card-head {
    border-bottom: none;
    @media (max-width: 768px) {
      text-align:center;
    }
  }
  .ant-card-body {
    padding: 0px 24px 24px 24px;
  }
`;

const DashboardPage: React.FC = () => {
  return (
    <DashboardContainer>
      <LeftPanel>
        <StyledCard title="Sales Overview">
        <SalesOverview />
        </StyledCard>
        <StyledCard title="Purchase Overview">
          <PurchaseOverview />
        </StyledCard>
        <StyledCard title="Sales & Purchase">
          <SalesPurchase />
        </StyledCard>
        
        <StyledCard title="Top Selling Stock">
          <TopSellingStock />
        </StyledCard>
      </LeftPanel>
      <RightPanel>
      <StyledCard title="Inventory Summary">
          <InventorySummary />
        </StyledCard>
        <StyledCard title="Product Summary">
          <ProductSummary />
        </StyledCard>
        <StyledCard title="Order Summary">
          <OrderSummary />
        </StyledCard>
        
        <StyledCard title="Low Quantity Stock">
          <LowQuantityStock />
        </StyledCard>
      </RightPanel>
    </DashboardContainer>
  );
};


export default DashboardPage;