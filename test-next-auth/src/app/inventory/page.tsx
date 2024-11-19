'use client';

import React from 'react';
import styled from 'styled-components';
import { Layout, Card } from 'antd';
import Products from '../components/Products';
import OveralInventory from '../components/OveralInventory';

const { Content } = Layout;


const InventoryContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 24px;
  height: 100%;
  flex-direction:column;

  @media (max-width: 1024px) {
    flex-direction: column; 
  }
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

const InventoryPage: React.FC = () => {
  return (
    <InventoryContainer>
        <StyledCard title="Overal Inventory">
        <OveralInventory />
        </StyledCard>
      <StyledCard title="Products">
          <Products />
        </StyledCard>
    </InventoryContainer>
  );
};

export default InventoryPage;