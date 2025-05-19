import React, { useState } from 'react';
import { 
  ProfileContainer, Content, TopBar, Title, Card, CardHeader, Form, Label, InputWrapper, Input, EyeButton, CardFooter, SaveButton, BackButton 
} from './styles';
import { FiArrowLeft } from 'react-icons/fi';

const Profile: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  return (
    <ProfileContainer>
      <Content>
        <Title>Editar Perfil</Title>
        <TopBar>
          <BackButton onClick={onClose}>
            <FiArrowLeft size={20} style={{ marginRight: 10 }} />
            Voltar
          </BackButton>
        </TopBar>
        <Card>
          <CardHeader>Editar Senha</CardHeader>
          <Form>
            <div>
              <Label>Senha Atual</Label>
              <InputWrapper>
                <Input type={showPassword ? 'text' : 'password'} />
                <EyeButton type="button" onClick={() => setShowPassword(v => !v)}>
                  👁
                </EyeButton>
              </InputWrapper>
            </div>
            <div>
              <Label>Confirmar Senha Atual</Label>
              <InputWrapper>
                <Input type={showPassword2 ? 'text' : 'password'} />
                <EyeButton type="button" onClick={() => setShowPassword2(v => !v)}>
                  👁
                </EyeButton>
              </InputWrapper>
            </div>
            <div>
              <Label>Nova Senha</Label>
              <InputWrapper>
                <Input type={showPassword3 ? 'text' : 'password'} />
                <EyeButton type="button" onClick={() => setShowPassword3(v => !v)}>
                  👁
                </EyeButton>
              </InputWrapper>
            </div>
          </Form>
          <CardFooter>
            <SaveButton type="submit">Atualizar</SaveButton>
          </CardFooter>
        </Card>
      </Content>
    </ProfileContainer>
  );
};

export default Profile;