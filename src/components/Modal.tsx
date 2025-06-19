import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import GreenButton from '../components/GreenButton';

const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
`;

const Content = styled(Dialog.Content)`
  background: #202024;
  border-radius: 8px;
  padding: 32px;
  width: 100%;
  max-width: 450px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled(Dialog.Title)`
  font-size: 20px; 
  font-family: 'Arial', sans-serif ;
  font-weight: 600;
  color: #f0f0f0;
  margin-bottom: 24px;
`;

const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: none;
  top: 16px;
  right: 16px;
  cursor: pointer;
  color: #aaa;
`;

interface ModalProps {
    title: string;
    children: React.ReactNode;
    triggerLabel: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }
  
  export const Modal: React.FC<ModalProps> = ({
    title,
    children,
    triggerLabel,
    open,
    onOpenChange,
  }) => {
    return (
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Trigger asChild>
          <GreenButton>{triggerLabel}</GreenButton>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Overlay />
          <Content>
          <Title>{title}</Title>
            <CloseButton>
              <FiX size={20} />
            </CloseButton>
            {children}
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  };