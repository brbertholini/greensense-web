import styled from 'styled-components';

export const UsersContainer = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 40px auto 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 80%;
  padding: 8px 36px 8px 12px;
  border-radius: 20px;
  border: 1.5px solid #C0BCBC;
  background: transparent;
  color: #E0E0E0;
  font-size: 14px;
  outline: none;
  margin-top: 8px;
`;

export const Label = styled.label`
  color: #C0BCBC;
  font-family: 'Arial', sans-serif;
  font-size: 13px;
`;

export const Form = styled.form`
  padding: 18px 16px 0 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const UsersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #E0E0E0;
  margin-bottom: 18px;
  font-size: 17px;
`;

export const UsersButton = styled.button`
  background: transparent;
  color: #44AA00;
  border: 1.5px solid #44AA00;
  border-radius: 16px;
  padding: 7px 18px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #44AA00;
    color: #fff;
  }
`;

export const SearchInput = styled.input`
  background: transparent;
  border: 1.5px solid #E0E0E0;
  border-radius: 16px;
  padding: 7px 18px;
  color: #E0E0E0;
  font-size: 14px;
  outline: none;
  width: 180px;
`;

export const UsersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #23232a;
  border-radius: 12px;
  overflow: hidden;
  th, td {
    padding: 12px 10px;
    text-align: left;
    color: #E0E0E0;
    font-size: 15px;
  }
  th {
    background: #23232a;
    font-weight: 700;
    border-bottom: 2px solid #333;
  }
  tr:not(:last-child) td {
    border-bottom: 1px solid #333;
  }
`;

export const UsersActions = styled.div`
  display: flex;
  gap: 14px;
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