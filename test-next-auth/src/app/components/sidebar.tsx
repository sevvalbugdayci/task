"use client";
import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { fetchMenuItems } from '../api/apiService'; 
import styled from 'styled-components';
import RequireAuth from './RequireAuth';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const { Sider } = Layout;

const Logo = styled.img`
  width: 100%;
  margin-top: 15px; 
  margin-bottom: 24px;
`;

const SidebarContainer = styled(Sider)`
  background-color: #fff;
  width: 280px !important;
  flex:unset !important;
  max-width:unset !important;
  height: 960px;

  @media (max-width: 1024px) {
    width: 100%; 
    position: absolute;
    z-index: 1;
  }
`;

const StyledMenu = styled(Menu)`
  background-color: #fff;
  
  .ant-menu-item {
    color: #5D6679;
    margin-bottom: 12px;
  }

  .ant-menu-item-selected {
    color: #1570EF;
  }

  .ant-menu-item:last-child {
    margin-bottom: 48px;
  }

  .ant-menu-item-icon {
    margin-right: 10px; 
  }
`;

const StyledBottomMenu = styled(Menu)`
  background-color: #fff;
  margin-bottom: auto;

  span {
    color:#5D6679;
  }
`;

const CollapseToggle = styled.div`
  position: absolute;
  top: 29px;
  right: -50px; 
  font-size: 24px;
  z-index: 10;
  background: #fff; 
  padding: 5px; 
  cursor: pointer;
  color: #139ed8;
  display:none;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    top: 16px;
  }

  @media (max-width: 1024px) {
    display: block;
   
  }
`;

const CustomSidebar: React.FC<{ onSelect: (key: string) => void; }> = ({ onSelect }) => {
  const router = useRouter();
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const items = await fetchMenuItems();
        setMenuItems(items);
      } catch (error) {
        console.error("No items", error);
      }
    };

    getMenuItems();
  }, []);

  const getIconForMenuItem = (id: string) => {
    return <img src={`/icons/${id}.svg`} alt="icon" style={{ width: '24px', height: '24px' }} />;
  };

  const handleMenuClick = (key: string) => {
    switch (key) {
      case '1':
        router.push('/dashboard');
        break;
      case '2':
        router.push('/inventory');
        break;
      case '3':
        router.push('/maintenance');
        break;
      case '4':
        router.push('/maintenance');
        break;
      case '5':
        router.push('/maintenance');
        break;
      case '6':
        router.push('/maintenance');
        break;
      default:
        break;
    }
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/auth/login' });
  };

  return (  
    <RequireAuth>
      <SidebarContainer trigger={null} collapsible 
      collapsed={collapsed}
      style={{ transform: collapsed ? 'translateX(-100%)' : 'translateX(0%' }}
      >
        <Logo src="/logoS.svg" alt="Logo" />
        <StyledMenu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
          onClick={({ key }) => {
            handleMenuClick(key); 
            onSelect(key);
          }}
        >
          {menuItems.map(item => (
            <Menu.Item key={item.id} icon={getIconForMenuItem(item.id)}>
              {item.name}
            </Menu.Item>
          ))}
        </StyledMenu>
        <StyledBottomMenu mode="inline">
          <Menu.Item key="7" icon={<img src="/icons/7.svg" alt="Settings" />} onClick={() => onSelect('7')}>
            Settings
          </Menu.Item>
          <Menu.Item key="8" icon={<img src="/icons/8.svg" alt="Logout" />} onClick={handleLogout}>
            Logout
          </Menu.Item>
        </StyledBottomMenu>
        <CollapseToggle onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </CollapseToggle>
      </SidebarContainer>
    </RequireAuth>
      
  );
};

export default CustomSidebar;