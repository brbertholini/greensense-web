import React, { useState } from 'react';
import {
  FilterButtons, FilterButton, CardContainer, Card,
  ChartContainer, PieChart as PieChartContainer, LineChart as LineChartContainer,
  ContentWrapper, Title, FilterButtonRow, DashboardRow
} from './styles';

import {
  PieChart, Pie, Cell, Tooltip, Legend,
  LineChart, Line, XAxis, YAxis, CartesianGrid
} from 'recharts';

type FilterType = '30 Dias' | '60 Dias' | '90 Dias' | '12 Meses';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('30 Dias');

  const handleFilterClick = (filterName: FilterType) => {
    setActiveFilter(filterName);
  };

  // Dados dos cards por filtro
  const dadosCards = {
    '30 Dias': {
      totalColetas: 104,
      alertasLixeirasCheias: 12,
      novasLixeiras: 8,
    },
    '60 Dias': {
      totalColetas: 230,
      alertasLixeirasCheias: 25,
      novasLixeiras: 15,
    },
    '90 Dias': {
      totalColetas: 340,
      alertasLixeirasCheias: 30,
      novasLixeiras: 22,
    },
    '12 Meses': {
      totalColetas: 1400,
      alertasLixeirasCheias: 110,
      novasLixeiras: 95,
    },
  };

  // Dados do gráfico de pizza
  const dadosColetasPorRegiao = {
    '30 Dias': [
      { regiao: 'Centro', quantidade: 30 },
      { regiao: 'Zona Norte', quantidade: 20 },
      { regiao: 'Zona Sul', quantidade: 18 },
      { regiao: 'Zona Leste', quantidade: 25 },
      { regiao: 'Zona Oeste', quantidade: 11 },
    ],
    '60 Dias': [
      { regiao: 'Centro', quantidade: 60 },
      { regiao: 'Zona Norte', quantidade: 50 },
      { regiao: 'Zona Sul', quantidade: 42 },
      { regiao: 'Zona Leste', quantidade: 55 },
      { regiao: 'Zona Oeste', quantidade: 23 },
    ],
    '90 Dias': [
      { regiao: 'Centro', quantidade: 90 },
      { regiao: 'Zona Norte', quantidade: 80 },
      { regiao: 'Zona Sul', quantidade: 70 },
      { regiao: 'Zona Leste', quantidade: 85 },
      { regiao: 'Zona Oeste', quantidade: 35 },
    ],
    '12 Meses': [
      { regiao: 'Centro', quantidade: 400 },
      { regiao: 'Zona Norte', quantidade: 320 },
      { regiao: 'Zona Sul', quantidade: 280 },
      { regiao: 'Zona Leste', quantidade: 350 },
      { regiao: 'Zona Oeste', quantidade: 150 },
    ],
  };

  // Dados do gráfico de linha
  const historicoColetas = {
    '30 Dias': [
      { periodo: 'Semana 1', quantidade: 5000 },
      { periodo: 'Semana 2', quantidade: 7000 },
      { periodo: 'Semana 3', quantidade: 9000 },
      { periodo: 'Semana 4', quantidade: 11000 },
    ],
    '60 Dias': [
      { periodo: 'Semana 1', quantidade: 6000 },
      { periodo: 'Semana 2', quantidade: 8000 },
      { periodo: 'Semana 3', quantidade: 10000 },
      { periodo: 'Semana 4', quantidade: 12000 },
      { periodo: 'Semana 5', quantidade: 14000 },
      { periodo: 'Semana 6', quantidade: 16000 },
    ],
    '90 Dias': [
      { periodo: 'Mês 1', quantidade: 15000 },
      { periodo: 'Mês 2', quantidade: 20000 },
      { periodo: 'Mês 3', quantidade: 25000 },
    ],
    '12 Meses': [
      { periodo: 'Jan', quantidade: 5000 },
      { periodo: 'Fev', quantidade: 7000 },
      { periodo: 'Mar', quantidade: 10000 },
      { periodo: 'Abr', quantidade: 15000 },
      { periodo: 'Mai', quantidade: 18000 },
      { periodo: 'Jun', quantidade: 22000 },
      { periodo: 'Jul', quantidade: 26000 },
      { periodo: 'Ago', quantidade: 28000 },
      { periodo: 'Set', quantidade: 30000 },
      { periodo: 'Out', quantidade: 32000 },
      { periodo: 'Nov', quantidade: 35000 },
      { periodo: 'Dez', quantidade: 38000 },
    ],
  };

  const pieColors = ['#44AA00', '#FF8000', '#FF0000', '#8884d8', '#82ca9d'];

  const { totalColetas, alertasLixeirasCheias, novasLixeiras } = dadosCards[activeFilter];

  return (
    <ContentWrapper>
      <FilterButtons>
        <Title>Filtros</Title>
        <FilterButtonRow>
          {(['30 Dias', '60 Dias', '90 Dias', '12 Meses'] as FilterType[]).map(filter => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </FilterButton>
          ))}
        </FilterButtonRow>
      </FilterButtons>

      <DashboardRow>
        <CardContainer>
          <Card>
            <h3>{totalColetas}</h3>
            <p>Total de Coletas</p>
          </Card>
          <Card>
            <h3>{alertasLixeirasCheias}</h3>
            <p>Alertas de Lixeiras Cheias</p>
          </Card>
          <Card>
            <h3>{novasLixeiras}</h3>
            <p>Novas Lixeiras</p>
          </Card>
        </CardContainer>

        <ChartContainer>
          <PieChartContainer>
            <h4>Quantidade de Coletas por Região</h4>
            <PieChart width={360} height={250}>
              <Pie
                data={dadosColetasPorRegiao[activeFilter]}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
                dataKey="quantidade"
                nameKey="regiao"
              >
                {dadosColetasPorRegiao[activeFilter].map((_, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </PieChartContainer>

          <LineChartContainer>
            <h4>Histórico de Coletas</h4>
            <div className="chart-subtitle">Dia / Semana / Mês</div>
            <LineChart
              width={360}
              height={250}
              data={historicoColetas[activeFilter]}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="periodo" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="quantidade" stroke="#44AA00" strokeWidth={2} />
            </LineChart>
          </LineChartContainer>
        </ChartContainer>
      </DashboardRow>
    </ContentWrapper>
  );
};

export default Dashboard;
