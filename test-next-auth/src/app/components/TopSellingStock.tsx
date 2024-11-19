'use client';

import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    background: #fff; 
    color: #5D6679;
    font-size: 14px; 
    border-bottom: 1px solid #f0f1f3;
    border-right:none;
  }
  
  .ant-table-tbody > tr > td {
    color: #5D6679;
    font-size: 14px;
  }  
`;

const TopSellingStock: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Sold Quantity',
      dataIndex: 'soldQuantity',
      key: 'soldQuantity',
    },
    {
      title: 'Remaining Quantity',
      dataIndex: 'remainingQuantity',
      key: 'remainingQuantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Surf Excel',
      soldQuantity: 30,
      remainingQuantity: 12,
      price: 100,
    },
    {
      key: '2',
      name: 'Rin',
      soldQuantity: 21,
      remainingQuantity: 15,
      price: 207,
    },
    {
      key: '3',
      name: 'Parle G',
      soldQuantity: 19,
      remainingQuantity: 17,
      price: 105,
    },
  ];

  return (
    <StyledTable
      columns={columns}
      dataSource={data}
      pagination={false}
      rowClassName="editable-row" 
    />
  );
};

export default TopSellingStock;