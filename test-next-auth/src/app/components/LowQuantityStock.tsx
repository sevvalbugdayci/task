'use client';

import React from 'react';
import styled from 'styled-components';

const LowQuantityStockContainer = styled.div`
  display: flex;
  flex-direction:column;
  gap:4px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  justify-content:space-between;
  background: #fff; 
  flex: 1;
`;

const ItemImage = styled.img`
  width: 60px;
  height: 70px;
`;

const ItemBody = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #000;
  margin-top: 8px;
`;

const ItemText = styled.div`
  color: #667085;
  font-size: 14px;
  font-weight:400;
`;

const Banner = styled.div`
  background-color: #FEECEB;
  color: #AA3028;
  padding: 4px 8px;
  border-radius: 15px;
  font-size: 12px;
  margin-top: 8px;
`;

const items = [
  {
    id: '1',
    img: '/icons/Rectangle 71.svg',
    title: 'Tata Salt',
    quantity: 'Remaining Quantity: 10 Packets',
    bannerText: "Low"
  },
  {
    id: '2',
    img: '/icons/Rectangle 72.svg',
    title: 'Tata Salt',
    quantity: 'Remaining Quantity: 5 Packets',
    bannerText: "Low"
  },
  {
    id: '3',
    img: '/icons/Rectangle 78.svg',
    title: 'Tata Salt',
    quantity: 'Remaining Quantity: 3 Packets',
    bannerText: "Low"
  },
];

const LowQuantityStock: React.FC = () => {
  return (
    <LowQuantityStockContainer>
      {items.map(item => (
        <ItemContainer key={item.id}>
          <ItemImage src={item.img} alt={item.title} />
          <ItemBody>{item.title}
          <ItemText>
             {item.quantity}
          </ItemText>
          </ItemBody>
          <Banner>{item.bannerText}</Banner>
        </ItemContainer>
      ))}
    </LowQuantityStockContainer>
  );
};

export default LowQuantityStock;