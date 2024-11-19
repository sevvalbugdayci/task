"use client";
import React from "react";
import { Layout, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import RequireAuth from "./RequireAuth";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 100px;
  background: #fff;
  margin-left: 2px;

  @media (max-width: 768px) {
    height: 70px;
  }
`;

const SearchInput = styled(Input)`
  margin-right: 16px;
  width: 400px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  margin-right: 10px;
  display: none;

  @media (max-width: 1024px) {
    display: block;
    width: 30px;
  }
`;

const NotificationIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const CustomHeader: React.FC = () => {
  return (

      <StyledHeader>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo src="/LogoM.svg" alt="Logo" /> 
          <SearchInput placeholder="Search" prefix={<SearchOutlined />} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <NotificationIcon src="/Notification.svg" alt="Notification"/>
          <ProfileImage src="/img.svg" alt="Profile" />
        </div>
      </StyledHeader>

  );
};

export default CustomHeader;