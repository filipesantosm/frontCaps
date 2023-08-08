import { useRef, useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { useAuth } from '@/hooks/useAuth';
import { FaChevronRight } from 'react-icons/fa';
import { useOutside } from '@/hooks/useOutside';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const { query, pathname } = router;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const containerRef = useRef<HTMLDivElement>(null);

  useOutside(containerRef, () => setIsDropdownOpen(false));

  const setModalToShow = (type: AuthModals) => {
    if (!type) {
      const newQuery = { ...query };

      delete newQuery.modal;

      router.replace({
        pathname,
        query: newQuery,
      });
      return;
    }

    router.push({
      pathname,
      query: {
        ...query,
        modal: type,
      },
    });
  };

  const modalToShow = (query.modal || '') as AuthModals;

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
          <BsFillPersonFill />
          <UserName>{user.name?.split(' ')?.[0] || 'Usuário'}</UserName>
          <FaChevronRight />
        </DropdownButton>
        <DropdownList isOpen={isDropdownOpen}>
          <DropdownLink href="/perfil">Perfil</DropdownLink>
          <DropdownLink href="/alterar-senha">Alterar senha</DropdownLink>
          <DropdownLink href="/extrato">Extrato de compras</DropdownLink>
          <DropdownLink href="/meus-titulos">Meus títulos</DropdownLink>
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
