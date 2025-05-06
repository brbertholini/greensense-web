import React, { useState } from 'react';
import {Container,Sidebar,NavItem,Main,Header,Title,TopBarIcons,FilterButtons,FilterButton,CardContainer,Card,ChartContainer,PieChart,LineChart} from './styles';
import { FaHome, FaMap, FaTrash, FaBars } from 'react-icons/fa';
import { FiBell, FiUser, FiLogOut } from 'react-icons/fi';

type FilterType = '30 Dias' | '60 Dias' | '90 Dias' | '12 Meses';
type NavItemType = 'home' | 'map' | 'trash' | 'menu';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('30 Dias');
  const [activeNav, setActiveNav] = useState<NavItemType>('home');

  const handleFilterClick = (filterName: FilterType) => {
    setActiveFilter(filterName);
  };

  const handleNavClick = (navName: NavItemType) => {
    setActiveNav(navName);
  };

  const PieChartContent = () => <div className="chart-content">Pie Chart Placeholder</div>;
  const LineChartContent = () => <div className="chart-content">Line Chart Placeholder</div>;

  return (
    <Container>
      <Sidebar>
        <div className="logo">
          <img src="src/assets/brand.svg"/>
        </div>
        <nav>
          <NavItem active={activeNav === 'home'} onClick={() => handleNavClick('home')}>
            <FaHome />
          </NavItem>
          <NavItem active={activeNav === 'map'} onClick={() => handleNavClick('map')}>
            <FaMap />
          </NavItem>
          <NavItem active={activeNav === 'trash'} onClick={() => handleNavClick('trash')}>
            <FaTrash />
          </NavItem>
          <NavItem active={activeNav === 'menu'} onClick={() => handleNavClick('menu')}>
            <FaBars />
          </NavItem>
        </nav>
      </Sidebar>
      <Main>
        <Header>
          <Title>Filtros</Title>
          <TopBarIcons>
            <FiBell />
            <FiUser />
            <FiLogOut />
          </TopBarIcons>
        </Header>

        <FilterButtons>
          <FilterButton active={activeFilter === '30 Dias'} onClick={() => handleFilterClick('30 Dias')}>30 Dias</FilterButton>
          <FilterButton active={activeFilter === '60 Dias'} onClick={() => handleFilterClick('60 Dias')}>60 Dias</FilterButton>
          <FilterButton active={activeFilter === '90 Dias'} onClick={() => handleFilterClick('90 Dias')}>90 Dias</FilterButton>
          <FilterButton active={activeFilter === '12 Meses'} onClick={() => handleFilterClick('12 Meses')}>12 Meses</FilterButton>
        </FilterButtons>

        <CardContainer>
          <Card>
            <h3>104</h3>
            <p>Total de Coletas</p>
          </Card>
          <Card>
            <h3>12</h3>
            <p>Alertas de Lixeiras Cheias</p>
          </Card>
          <Card>
            <h3>08</h3>
            <p>Novas Lixeiras</p>
          </Card>
        </CardContainer>

        <ChartContainer>
          <PieChart>
            <h4>Quantidade de Coletas por Região</h4>
            <PieChartContent />
          </PieChart>
          <LineChart>
            <h4>Histórico de Coletas</h4>
            <div className="chart-subtitle">Dia / Semana / Mês</div>
            <LineChartContent />
          </LineChart>
        </ChartContainer>
      </Main>
    </Container>
  );
};

export default Dashboard;
