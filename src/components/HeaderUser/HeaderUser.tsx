import { useState } from 'react';
import ForgotModal from '../ForgotModal/ForgotModal';
import LoginModal from '../LoginModal/LoginModal';
import SuccessModal from '../SuccessModal/SuccessModal';
import { Container, LoginButton, RegisterButton } from './styles';
import SignUpModal from '../SignUpModal/SignUpModal';

type AuthModals = '' | 'signUp' | 'login' | 'forgot' | 'success';

const HeaderUser = () => {
  const [modalToShow, setModalToShow] = useState<AuthModals>('');

  const modalComponents: Record<AuthModals, React.ReactNode> = {
    '': null,
    login: (
      <LoginModal
        onClickForgot={() => setModalToShow('forgot')}
        onClickSignUp={() => setModalToShow('signUp')}
        onClose={() => setModalToShow('')}
      />
    ),
    forgot: (
      <ForgotModal
        onSuccess={() => setModalToShow('success')}
        onClickLogin={() => setModalToShow('login')}
        onClose={() => setModalToShow('')}
      />
    ),
    signUp: (
      <SignUpModal
        onClose={() => setModalToShow('')}
        onClickLogin={() => setModalToShow('login')}
      />
    ),
    success: (
      <SuccessModal
        message="Sua senha foi enviada"
        onClose={() => setModalToShow('')}
      />
    ),
  };

  return (
    <>
      <Container>
        <RegisterButton type="button" onClick={() => setModalToShow('signUp')}>
          Cadastre-se
        </RegisterButton>
        <LoginButton type="button" onClick={() => setModalToShow('login')}>
          Entrar
        </LoginButton>
      </Container>
      {modalComponents[modalToShow]}
    </>
  );
};

export default HeaderUser;
