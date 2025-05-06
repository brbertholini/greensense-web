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
  background-color: #1C1C1E;
  color: #E0E0E0;
  font-family: 'Arial', sans-serif;
`;

export const Sidebar = styled.aside`
  width: 80px;
  background-color: #2D2D2D;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;

  .logo {
    font-size: 40px;
    color: #FFFFFF;
    font-weight: bold;
    margin-bottom: 48px;
    margin-right: 32px;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
      color: #3FB950;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 70%;
        background-color: #3FB950;
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
  padding: 24px 40px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
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

  i {
    font-size: 21px;
    color: #A0A0A0;
    cursor: pointer;
    &:hover {
      color: #FFFFFF;
    }
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  gap: 13px;
  margin-bottom: 40px;
`;

export const FilterButton = styled.button<FilterButtonProps>`
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  ${({ active }) =>
    active
      ? css`
          background-color: #3FB950;
          color: #FFFFFF;
          border: 1px solid #3FB950;
        `
      : css`
          background-color: #39393F;
          color: #B0B0B0;
          border: 1px solid #39393F;
        `}

  &:hover:not(:disabled) {
    ${({ active }) =>
      !active &&
      css`
        background-color: #4a4a52;
        border-color: #4a4a52;
        color: #FFFFFF;
      `}
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px; /* Gap between cards */
  margin-bottom: 40px;
`;

export const Card = styled.div`
  background-color: #2D2D2D;
  padding: 29px 24px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

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
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 24px;
  flex-grow: 1;
`;

const BaseChart = styled.div`
  background-color: #2D2D2D;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  color: #E0E0E0;

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
export const PieChart = styled(BaseChart)`

`;

export const LineChart = styled(BaseChart)`

`;
