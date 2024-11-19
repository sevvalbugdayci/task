'use client';

import React, { useEffect, useState } from 'react';
import { Table, Button, Popover } from 'antd'; 
import styled from 'styled-components';

const StyledTable = styled(Table)`
  &&& .ant-table-thead > tr > th {
    background: none;
    border: none;
    color: #667085;
    font-size: 14px;
    font-weight: 500;
  }

  &&& .ant-table-tbody > tr > td {
    color: #667085;
    font-size: 14px;
    font-weight: 500;
  }

  &&& .ant-table-tbody > tr > td {
    border: 1px solid #f0f1f3;
  }
`;

const FilterButton = styled(Button)`
  margin-bottom: 16px;
  float: left;
`;

interface ProductData {
  key: string;
  product: string;
  buyingPrice: number;
  quantity: number;
  thresholdValue: number;
  expiryDate: string;
  availability: 'In-stock' | 'Out of stock';
}

const Products: React.FC = () => {
  const [data, setData] = useState<ProductData[]>([]);
  const [filteredData, setFilteredData] = useState<ProductData[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sampleData: ProductData[] = [
      {
        key: '1',
        product: 'Surf Excel',
        buyingPrice: 30,
        quantity: 10,
        thresholdValue: 5,
        expiryDate: '2023-12-01',
        availability: 'In-stock',
      },
      {
        key: '2',
        product: 'Tata Salt',
        buyingPrice: 25,
        quantity: 15,
        thresholdValue: 3,
        expiryDate: '2024-01-15',
        availability: 'In-stock',
      },
      {
        key: '3',
        product: 'Rin',
        buyingPrice: 18,
        quantity: 20,
        thresholdValue: 4,
        expiryDate: '2024-02-10',
        availability: 'Out of stock',
      },
      {
        key: '4',
        product: 'Parle G',
        buyingPrice: 12,
        quantity: 5,
        thresholdValue: 2,
        expiryDate: '2024-03-15',
        availability: 'In-stock',
      },
      {
        key: '5',
        product: 'Dabur Honey',
        buyingPrice: 50,
        quantity: 20,
        thresholdValue: 6,
        expiryDate: '2024-04-01',
        availability: 'In-stock',
      },
    ];

    setData(sampleData);
    setFilteredData(sampleData);
  }, []);

  const handleFilter = (filter: string) => {
    if (filter === 'all') {
      setFilteredData(data);
    } else {
      const availabilityFilter = filter === 'in-stock' ? 'In-stock' : 'Out of stock';
      const newFilteredData = data.filter(item => item.availability === availabilityFilter);
      setFilteredData(newFilteredData);
    }
    setVisible(false);
  };

  const columns = [
    {
      title: 'Products',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Buying Price',
      dataIndex: 'buyingPrice',
      key: 'buyingPrice',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Threshold Value',
      dataIndex: 'thresholdValue',
      key: 'thresholdValue',
    },
    {
        title: 'Expiry Date',
        dataIndex: 'expiryDate',
        key: 'expiryDate',
      },
      {
        title: 'Availability',
        dataIndex: 'availability',
        key: 'availability',
        render: (availability: string) => (
          <span style={{ color: availability === 'In-stock' ? '#10A760' : '#DA3E33' }}>
            {availability}
          </span>
        ),
      },
    ];
  
    return (
      <>
        <div style={{ marginBottom: 16, position: 'relative' }}>
          <Popover
            content={
              <div>
                <Button onClick={() => handleFilter('in-stock')} style={{ marginBottom: 8 }}>
                  In Stock
                </Button>
                <Button onClick={() => handleFilter('out-of-stock')} style={{ marginBottom: 8 }}>
                  Out of Stock
                </Button>
                <Button onClick={() => handleFilter('all')}>
                  Show All
                </Button>
              </div>
            }
            title="Filters"
            trigger="click"
            visible={visible}
            onVisibleChange={setVisible}
          >
            <FilterButton type="primary">Filters</FilterButton>
          </Popover>
        </div>
        
        <StyledTable
          columns={columns}
          dataSource={filteredData}
          pagination={{ pageSize: 5 }} 
          scroll={{ x: true }}
        />
      </>
    );
  };
  
  export default Products;