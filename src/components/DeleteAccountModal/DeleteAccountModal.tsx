import { useOutside } from '@/hooks/useOutside';
import handleError from '@/utils/handleToast';
import { useRef, useState } from 'react';
import { IoIosWarning } from 'react-icons/io';
import Input from '../Input/Input';
import {
  Attention,
  Container,
  Content,
  ContinueButton,
  DeleteAccountButton,
  IconWrapper,
  PasswordTitle,
  PromptMessage,
  PromptQuestion,
  Separator,
} from './styles';

interface Props {
  onSuccess: () => void;
  onClose: () => void;
}

const DeleteAccountModal = ({ onSuccess, onClose }: Props) => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [password, setPassword] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  const onSubmit = async () => {
    try {
      setShowPasswordForm(false);
      onSuccess();
    } catch (error) {
      handleError(error);
    }
  };

  useOutside(contentRef, onClose);

  return (
    <Container>
      <Content ref={contentRef}>
        {showPasswordForm ? (
          <>
            <PasswordTitle>Digite sua senha</PasswordTitle>
            <PromptMessage
              style={{
                textAlign: 'left',
              }}
            >
              Informe sua senha para poder confirmar a exclusão de conta
            </PromptMessage>
            <Input
              label="SENHA"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              containerClassName="password-field"
            />
            <Separator
              style={{
                marginTop: 'auto',
              }}
            />
            <DeleteAccountButton type="button" onClick={onSubmit}>
              Excluir conta
            </DeleteAccountButton>
          </>
        ) : (
          <>
            <IconWrapper>
              <IoIosWarning />
            </IconWrapper>
            <Attention>ATENÇÃO!</Attention>
            <PromptQuestion>
              Tem certeza que deseja excluir sua conta?
            </PromptQuestion>
            <PromptMessage>
              Todos seus dados serão excluídos do nosso sistema. Para ter acesso
              novamente à plataforma terá que ser feito um novo cadastro.
            </PromptMessage>
            <Separator />
            <ContinueButton
              type="button"
              onClick={() => setShowPasswordForm(true)}
            >
              Continuar
            </ContinueButton>
          </>
        )}
      </Content>
    </Container>
  );
};

export default DeleteAccountModal;
