import styled from 'styled-components';

export const TrashContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 40px auto 0 auto;
  display: flex;
  flex-direction: column;
`;

export const TrashHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #E0E0E0;
  margin-bottom: 24px;
  font-size: 17px;
`;

export const TrashButton = styled.button`
  background: #44AA00;
  color: #fff;
  border: none;
  border-radius: 16px;
  padding: 7px 18px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #368800;
  }
`;

export const TrashList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const TrashItem = styled.div`
  background: #23232a;
  border-radius: 12px;
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TrashStatus = styled.span`
  display: inline-block;
  margin-left: 18px;
  padding: 3px 16px;
  border-radius: 8px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
`;

export const TrashActions = styled.div`
  display: flex;
  gap: 18px;
  button {
    background: none;
    border: none;
    color: #C0BCBC;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: #44AA00;
    }
  }
`;