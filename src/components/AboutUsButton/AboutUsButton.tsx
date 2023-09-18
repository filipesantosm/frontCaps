import { useRef, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useOutside } from '../../hooks/useOutside';
import { Container, StyledLink, Links, ToggleButton, Wrapper } from './styles';

const AboutUsButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useOutside(containerRef, () => setIsOpen(false));

  return (
    <Wrapper>
      <Container isOpen={isOpen} ref={containerRef}>
        <ToggleButton
          isOpen={isOpen}
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
        >
          Sobre Nós <FaChevronRight />
        </ToggleButton>
        <Links isOpen={isOpen}>
          <StyledLink href="/quem-somos">Quem somos</StyledLink>
          <StyledLink href="/instituicao">Instituição Beneficiada</StyledLink>
          <StyledLink href="/regulamentos">Condições de Participação</StyledLink>
          <StyledLink href="/politica-de-privacidade">
            Política de Privacidade
          </StyledLink>
        </Links>
      </Container>
    </Wrapper>
  );
};

export default AboutUsButton;
