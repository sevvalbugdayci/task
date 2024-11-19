import React from 'react';
import styled from 'styled-components';

const OveralInventoryContainer = styled.div`
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
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%; 
  padding: 0 16px; /* Sağ ve sol iç boşluk */
  border-right: 1px solid #F0F1F3;
  gap: 8px;

  &:first-child {
    border-left: none; /* İlk kartta sol borde kaldır */
  }

  @media (max-width: 768px) {
    border-right: none; /* Mobilde border sağdan kaldır */
  }
`;

const TitleText = styled.div<{ color: string }>`
  color: ${props => props.color};
  font-weight: 600; /* Semi-bold */
  font-size: 16px;
  margin-bottom: 4px;
`;

const DescriptionText = styled.div`
  color: #667085; /* Normal metin rengi */
  font-weight: 500; /* Medium */
  font-size: 14px; /* Yazı boyutu */
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Öğeleri arasındaki boşluğu ayarla */
  width: 100%; /* Genişliği doldur */
  margin-bottom: 8px;
`;

const NumberText = styled.div`
  color: #5D6679; /* Sayı rengi */
  font-weight: 600; /* Semi-bold */
  font-size: 16px; /* Yazı boyutu */
`;

const BottomRow = styled.div`
  display: flex; /* Alt satır için flex düzen */
  justify-content: space-between; /* Öğeleri dağıt */
  width: 100%; /* Genişlik */
  color: #858D9D; /* Alt satırdaki açıklamaların rengi */
  font-size: 14px; /* Yazı boyutu */
`;

const OveralInventory: React.FC = () => {
  return (
    <OveralInventoryContainer>
      <OverviewCard>
        <TitleText color="#1570EF">Categories</TitleText>
        <StatsContainer>
          <NumberText>14</NumberText>
        </StatsContainer>
        <BottomRow>
          <div>Last 7 Days</div>
        </BottomRow>
      </OverviewCard>

      <OverviewCard>
        <TitleText color="#E19133">Total Products</TitleText>
        <StatsContainer>
          <NumberText>845</NumberText>
          <NumberText>250000</NumberText>
        </StatsContainer>
        <BottomRow>
          <div>Last 7 Days</div>
          <div>Revenue</div>
        </BottomRow>
      </OverviewCard>

      <OverviewCard>
        <TitleText color="#845EBC">Top Selling</TitleText>
        <StatsContainer>
          <NumberText>5</NumberText>
          <NumberText>2500</NumberText>
        </StatsContainer>
        <BottomRow>
          <div>Last 7 Days</div>
          <div>Cost</div>
        </BottomRow>
      </OverviewCard>

      <OverviewCard>
        <TitleText color="#F36960">Low Stock</TitleText>
        <StatsContainer>
          <NumberText>12</NumberText>
          <NumberText>2</NumberText>
        </StatsContainer>
        <BottomRow>
          <div>Ordered</div>
          <div>Not in Stock</div>
        </BottomRow>
      </OverviewCard>
    </OveralInventoryContainer>
  );
};

export default OveralInventory;