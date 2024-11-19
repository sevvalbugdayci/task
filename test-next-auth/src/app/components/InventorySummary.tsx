import React from 'react';
import styled from 'styled-components';

const InventorySummaryContainer = styled.div`
  display: flex;
  gap: 22px;
  margin-top: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const OverviewCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%; 
  border-left: 1px solid #F0F1F3;
  gap:5px;

  @media (max-width: 768px) {
    border-left: none;
  }

  &:first-child {
    border-left: none;
  }
`;

const Icon = styled.img`
  width: 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const NumberText = styled.div`
  color: #5D6679;
  font-weight: 600;
  font-size: 14px;

  @media (max-width: 768px) {
    margin-right: unset;
  }
`;

const LabelText = styled.div`
  color: #667085;
  font-weight: 500; 
  font-size: 14px;
`;

const InventorySummary: React.FC = () => {
  return (
    <InventorySummaryContainer>
      <OverviewCard>
        <Icon src="/icons/Quantity.svg" alt="Sales" />
        <InfoContainer>
          <NumberText>868</NumberText>
          <LabelText>Qantity in Hand</LabelText>
        </InfoContainer>
      </OverviewCard>
      <OverviewCard>
        <Icon src="/icons/On the way.svg" alt="Revenue" />
        <InfoContainer>
          <NumberText>200</NumberText>
          <LabelText>To be received</LabelText>
        </InfoContainer>
      </OverviewCard>
    </InventorySummaryContainer>
  );
};

export default InventorySummary;
