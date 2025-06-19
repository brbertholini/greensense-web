import styled from 'styled-components';

export const DetailContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 40px auto 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #23232a;
  border-radius: 12px;
  padding: 24px;
  gap: 20px;
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #E0E0E0;
  margin-bottom: 12px;
  font-size: 18px;
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #aaa;
`;

export const Value = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: 500;
`;

export const StatusTag = styled.span<{ active: boolean }>`
  display: inline-block;
  padding: 4px 16px;
  border-radius: 8px;
  color: #fff;
  background-color: ${(props) => (props.active ? '#44AA00' : '#444')};
  font-size: 13px;
  font-weight: 500;
`;

export const BackButton = styled.button`
  background: #44AA00;
  color: #fff;
  border: none;
  border-radius: 16px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  align-self: flex-start;

  &:hover {
    background: #368800;
  }
`;

export const MaterialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`;

export const MaterialItem = styled.div`
  background: #23232a;
  border-radius: 8px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
`;

export const MaterialActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;

  button {
    background: none;
    border: none;
    color: #c0bcbd;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      color: #44aa00;
    }
  }
`;

export const Input = styled.input`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #444;
  background-color: #121214;
  color: #fff;
  font-size: 14px;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border-color: #44AA00;
  }
`;