import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 18px;
`;

export const BackButton = styled.button`
  margin-top:8px;
  display: flex;
  align-items: center;
  background: #23232a;
  color: #44AA00;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 18px;
  border-radius: 24px;
  box-shadow: 0 2px 8px rgba(68,170,0,0.08);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  outline: none;

  &:hover {
    background: #44AA00;
    color: #fff;
    box-shadow: 0 4px 16px rgba(68,170,0,0.18);
  }
`;

export const Title = styled.h2`
  color: #E0E0E0;
  font-size: 22px;
  font-weight: 600;
  margin: 0;
`;

export const Card = styled.div`
  background: #202024;
  border-radius: 14px;
  width: 370px;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  padding: 16px 16px 10px 16px;
  color: #C0BCBC;
  font-size: 15px;
  border-bottom: 1px solid #39393f;
`;

export const Form = styled.form`
  padding: 18px 16px 0 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Label = styled.label`
  color: #C0BCBC;
  font-size: 13px;
`;

export const InputWrapper = styled.div`
  position: relative;
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

export const EyeButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #C0BCBC;
  font-size: 18px;
  cursor: pointer;
`;

export const CardFooter = styled.div`
  border-top: 1px solid #39393f;
  padding: 18px 0 18px 0;
  display: flex;
  justify-content: center;
  background: transparent;
`;

export const SaveButton = styled.button`
  background: #44AA00;
  color: #fff;
  border: none;
  border-radius: 20px; // Mais arredondado
  padding: 7px 32px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #368800;
  }
`;