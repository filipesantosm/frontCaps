import { useRef, useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { useAuth } from '@/hooks/useAuth';
import { FaChevronRight } from 'react-icons/fa';
import { useOutside } from '@/hooks/useOutside';
import ForgotModal from '../ForgotModal/ForgotModal';
import LoginModal from '../LoginModal/LoginModal';
import SuccessModal from '../SuccessModal/SuccessModal';
import {
  Container,
  DropdownButton,
  DropdownContainer,
  DropdownItemButton,
  DropdownLink,
  DropdownList,
  DropdownWrapper,
  LoginButton,
  RegisterButton,
  UserName,
} from './styles';
import SignUpModal from '../SignUpModal/SignUpModal';

type AuthModals = '' | 'signUp' | 'login' | 'forgot' | 'success';

const HeaderUser = () => {
  const [modalToShow, setModalToShow] = useState<AuthModals>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const containerRef = useRef<HTMLDivElement>(null);

  useOutside(containerRef, () => setIsDropdownOpen(false));

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

  if (!isAuthenticated) {
    return (
      <>
        <Container>
          <RegisterButton
            type="button"
            onClick={() => setModalToShow('signUp')}
          >
            Cadastre-se
          </RegisterButton>
          <LoginButton type="button" onClick={() => setModalToShow('login')}>
            <BsFillPersonFill />
            Entrar
          </LoginButton>
        </Container>
        {modalComponents[modalToShow]}
      </>
    );
  }

  return (
    <DropdownWrapper>
      <DropdownContainer isOpen={isDropdownOpen} ref={containerRef}>
        <DropdownButton
          isOpen={isDropdownOpen}
          type="button"
          onClick={() => setIsDropdownOpen(prev => !prev)}
        >
          <BsFillPersonFill size={20} />
          <UserName>{user.name || 'Usuário'}</UserName>
          <FaChevronRight size={16} />
        </DropdownButton>
        <DropdownList isOpen={isDropdownOpen}>
          <DropdownLink href="/">Perfil</DropdownLink>
          <DropdownLink href="/">Alterar senha</DropdownLink>
          <DropdownLink href="/">Extrato de compras</DropdownLink>
          <DropdownLink href="/">Meus títulos</DropdownLink>
          <DropdownItemButton
            type="button"
            onClick={() => {
              setIsDropdownOpen(false);
              logout();
            }}
          >
            Sair/Logout
          </DropdownItemButton>
        </DropdownList>
      </DropdownContainer>
    </DropdownWrapper>
  );
};

export default HeaderUser;
