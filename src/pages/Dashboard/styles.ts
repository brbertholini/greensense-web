import styled, { css } from 'styled-components';

interface FilterButtonProps {
  active?: boolean;
}

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
`;

export const Sidebar = styled.aside`
  width: 100px;
  background-color: #202024;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0; // Remova ou diminua o padding

  .logo {
    font-size: 40px;
    color: #FFFFFF;
    font-weight: bold;
    margin-right:30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 32px; // Espaço entre logo e menu
  }
`;

export const NavItem = styled.div<NavItemProps>`
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
  padding: 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #202024;
  padding: 24px 40px 24px 24px;
  border-radius: 0;
  margin: 0;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #F0F0F0;
  font-weight: normal;
`;

export const TopBarIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-right:40px;

  svg {
    width:30px;
    height: 30px;
    color: #A0A0A0;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #FFFFFF;
    }
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #202024;
  border-radius: 16px;
  margin-top:80px;
  margin-bottom:40px;
  padding: 20px 32px 24px 32px;
  width: 100%;
  max-width: 700px;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  h1, h2, h3,h4,h5,h6 {
    margin-bottom: 18px;
  }
`;

export const FilterButtonRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  border: 2px solid #44AA00;
  border-radius: 12px;
  background: transparent;
  overflow: hidden;
`;

export const FilterButton = styled.button<FilterButtonProps>`
  flex: 1;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
  background: ${({ active }) => (active ? '#44AA00' : 'transparent')};
  color: ${({ active }) => (active ? '#fff' : '#E0E0E0')};
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  border-radius: 0;

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
  justify-content: center;
  max-width: 1100px;
`;

export const Card = styled.div`
  background-color: #202024;
  padding: 29px 24px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 220px;
  min-width: 200px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 45px;
    color: #FFFFFF;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 14px;
    color: #B0B0B0;
    margin: 0;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
  justify-content: center;
  max-width: 1100px;
`;

const BaseChart = styled.div`
  background-color: #202024;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  color: #E0E0E0;
  width: 400px;
  min-width: 320px;
  height: 260px;
  justify-content: flex-start;

  h4 {
    font-size: 16px;
    color: #F0F0F0;
    margin: 0 0 8px 0;
    font-weight: 600;
  }

  .chart-subtitle {
    font-size: 13px;
    color: #A0A0A0;
    margin-bottom: 16px;
  }

  .chart-content {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #39393F;
    border-radius: 6px;
    min-height: 150px;
  }
`;

export const PieChart = styled(BaseChart)``;

export const LineChart = styled(BaseChart)``;

export const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px); // ajuste se necessário, depende da altura do Header
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DashboardRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1100px;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
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
  color: #C0BCBC; // alterado aqui
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
    color: #C0BCBC; // alterado aqui
    font-size: 14px;
  }

  .divider {
    height: 1px;
    background: #39393f;
    margin: 0 0 0 0;
  }

  .see-all {
    width: 100%;
    background: none;
    border: none;
    color: #b0b0b0;
    font-size: 14px;
    padding: 10px 0 10px 0;
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
