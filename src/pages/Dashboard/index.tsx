import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Sidebar, NavItem, Main, Header, Title, TopBarIcons, FilterButtons, FilterButton,
  CardContainer, Card, ChartContainer, PieChart, LineChart, ContentWrapper, FilterButtonRow,
  DashboardRow, NotificationsModal
} from './styles';
import { FaHome, FaMap, FaTrash, FaBars } from 'react-icons/fa';
import { FiBell, FiUser, FiLogOut } from 'react-icons/fi';
import Profile from '../Profile';
import Trash from '../Trash';
import Users from '../Users'; // Importe o componente de usuários

type FilterType = '30 Dias' | '60 Dias' | '90 Dias' | '12 Meses';
type NavItemType = 'home' | 'map' | 'trash' | 'menu';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterType>('30 Dias');
  const [activeNav, setActiveNav] = useState<NavItemType>('home');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showTrash, setShowTrash] = useState(false);
  const [showUsers, setShowUsers] = useState(false); // Novo estado
  const notifRef = useRef<HTMLDivElement>(null);

  const handleFilterClick = (filterName: FilterType) => {
    setActiveFilter(filterName);
  };

  const handleNavClick = (navName: NavItemType) => {
    setActiveNav(navName);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const PieChartContent = () => <div className="chart-content">Pie Chart Placeholder</div>;
  const LineChartContent = () => <div className="chart-content">Line Chart Placeholder</div>;

  // Fecha o modal ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }
    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifications]);

  return (
    <Container>
      <Sidebar>
        <div className="logo">
          <img src="src/assets/brand.svg" />
        </div>
        <nav>
          <NavItem
            active={activeNav === 'home'}
            onClick={() => {
              setShowProfile(false);
              setShowTrash(false);
              setShowUsers(false); // Garante que a tela de usuários não apareça
              setActiveNav('home');
            }}
          >
            <FaHome />
          </NavItem>
          <NavItem active={activeNav === 'map'} onClick={() => handleNavClick('map')}>
            <FaMap />
          </NavItem>
          <NavItem
            active={activeNav === 'trash'}
            onClick={() => {
              setShowTrash(true);
              setShowProfile(false);
              setShowUsers(false);
              setActiveNav('trash');
            }}
          >
            <FaTrash />
          </NavItem>
          <NavItem
            active={activeNav === 'menu'}
            onClick={() => {
              setShowUsers(true);
              setShowProfile(false);
              setShowTrash(false);
              setActiveNav('menu');
            }}
          >
            <FaBars />
          </NavItem>
        </nav>
      </Sidebar>
      <Main>
        <Header>
          <TopBarIcons>
            <div style={{ position: 'relative' }}>
              <FiBell
                onClick={() => setShowNotifications((v) => !v)}
                style={{ cursor: 'pointer' }}
              />
              {showNotifications && (
                <NotificationsModal ref={notifRef}>
                  <div className="arrow" />
                  <div className="title">Notificações</div>
                  <div className="notification">
                    Caçamba #cb00644 está com nível alto de lixo.
                  </div>
                  <div className="divider" />
                  <button className="see-all">Ver Todas</button>
                </NotificationsModal>
              )}
            </div>
            <FiUser
              onClick={() => setShowProfile(true)}
              style={{
                cursor: 'pointer',
                color: showProfile ? '#44AA00' : undefined // verde quando editar perfil ativo
              }}
            />
            <FiLogOut onClick={handleLogout} style={{ cursor: 'pointer' }} />
          </TopBarIcons>
        </Header>
        <ContentWrapper>
          {showProfile ? (
            <Profile onClose={() => setShowProfile(false)} />
          ) : showTrash ? (
            <Trash onBack={() => setShowTrash(false)} />
          ) : showUsers ? (
            <Users />
          ) : (
            <>
              <FilterButtons>
                <Title>Filtros</Title>
                <FilterButtonRow>
                  <FilterButton active={activeFilter === '30 Dias'} onClick={() => handleFilterClick('30 Dias')}>30 Dias</FilterButton>
                  <FilterButton active={activeFilter === '60 Dias'} onClick={() => handleFilterClick('60 Dias')}>60 Dias</FilterButton>
                  <FilterButton active={activeFilter === '90 Dias'} onClick={() => handleFilterClick('90 Dias')}>90 Dias</FilterButton>
                  <FilterButton active={activeFilter === '12 Meses'} onClick={() => handleFilterClick('12 Meses')}>12 Meses</FilterButton>
                </FilterButtonRow>
              </FilterButtons>
              <DashboardRow>
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
              </DashboardRow>
            </>
          )}
        </ContentWrapper>
      </Main>
    </Container>
  );
};

export default Dashboard;
