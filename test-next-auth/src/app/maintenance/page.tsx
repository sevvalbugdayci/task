'use client';

import React from 'react';
import styled from 'styled-components';
import { SmileOutlined } from '@ant-design/icons';

const MaintenanceContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  margin: 0; 
`;

const Message = styled.p`
  margin: 0;
`;

const StyledIcon = styled(SmileOutlined)`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Maintenance: React.FC = () => {
  return (
    <MaintenanceContainer>
      <div>
        <StyledIcon />
        <Heading>Under Construction</Heading>
        <Message>This page is currently under construction. Please check back later.</Message>
      </div>
    </MaintenanceContainer>
  );
};

export default Maintenance;
