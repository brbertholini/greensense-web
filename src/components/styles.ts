import styled, { css } from 'styled-components';

const shouldForwardProp = (prop: string) => !['active'].includes(prop);

interface NavItemProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #121214;
  color: #E0E0E0;
  font-family: 'Arial', sans-serif;
  margin: 0;
  overflow: hidden; // 🔥 Remove qualquer scroll horizontal
`;

export const Sidebar = styled.aside`
  width: 100px;
  background-color: #202024;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  flex-shrink: 0;

  .logo {
    font-size: 40px;
    color: #FFFFFF;
    font-weight: bold;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 32px;
  }
`;

export const NavItem = styled.div.withConfig({ shouldForwardProp })<NavItemProps>`
  font-size: 29px;
  color: #A0A0A0;
  margin: 19px 0;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8px 0;
  position: relative;

  ${({ active }) =>
    active &&
    css`
      color: #44AA00;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 70%;
        background-color: #44AA00;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    `}

  &:hover {
    color: #FFFFFF;
  }
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #202024;
  padding: 24px 40px 24px 24px;
  width: 100%;
`;

export const TopBarIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-right: 40px;

  svg {
    width: 30px;
    height: 30px;
    color: #A0A0A0;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #FFFFFF;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px 40px 24px;
  box-sizing: border-box;
  overflow-x: hidden;
`;


export const NotificationsModal = styled.div`
  position: absolute;
  top: 48px;
  right: -20px;
  min-width: 220px;
  background: #23232a;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.25);
  z-index: 100;
  padding: 0;
  color: #C0BCBC;
  font-size: 14px;
  animation: fadeIn 0.15s;

  .arrow {
    position: absolute;
    top: -10px;
    right: 32px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #23232a;
  }

  .title {
    padding: 10px 16px 8px 16px;
    font-weight: 500;
    color: #b0b0b0;
    font-size: 15px;
  }

  .notification {
    padding: 8px 16px;
    color: #C0BCBC;
    font-size: 14px;
  }

  .divider {
    height: 1px;
    background: #39393f;
    margin: 0;
  }

  .see-all {
    width: 100%;
    background: none;
    border: none;
    color: #b0b0b0;
    font-size: 14px;
    padding: 10px 0;
    cursor: pointer;
    border-radius: 0 0 8px 8px;
    transition: background 0.2s;
    &:hover {
      background: #28282f;
      color: #fff;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px);}
    to { opacity: 1; transform: translateY(0);}
  }
`;
