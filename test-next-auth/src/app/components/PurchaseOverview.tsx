import React from 'react';
import styled from 'styled-components';

const PurchaseOverviewContainer = styled.div`
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
  gap:18px;

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
  margin-top: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NumberText = styled.div`
  color: #5D6679;
  font-weight: 600;
  font-size: 14px;
  margin-right: 30px;

  @media (max-width: 768px) {
    margin-right: unset;
  }
`;

const LabelText = styled.div`
  color: #667085;
  font-weight: 500; 
  font-size: 14px;
`;

const PurchaseOverview: React.FC = () => {
  return (
    <PurchaseOverviewContainer>
      <OverviewCard>
        <Icon src="/icons/Purchase.svg" alt="Sales" />
        <InfoContainer>
          <NumberText>82</NumberText>
          <LabelText>Purhase</LabelText>
        </InfoContainer>
      </OverviewCard>
      <OverviewCard>
        <Icon src="/icons/cost.svg" alt="Revenue" />
        <InfoContainer>
          <NumberText>13,573</NumberText>
          <LabelText>Cost</LabelText>
        </InfoContainer>
      </OverviewCard>
      <OverviewCard>
        <Icon src="/icons/Cancel.svg" alt="Profit" />
        <InfoContainer>
          <NumberText>5</NumberText>
          <LabelText>Cancel</LabelText>
        </InfoContainer>
      </OverviewCard>
      <OverviewCard>
        <Icon src="/icons/Profit.svg" alt="Cost" />
        <InfoContainer>
          <NumberText>17,432</NumberText>
          <LabelText>Return</LabelText>
        </InfoContainer>
      </OverviewCard>
    </PurchaseOverviewContainer>
  );
};

export default PurchaseOverview;
