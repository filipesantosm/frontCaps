// components/CookiePopup.tsx
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { Content, Container, AcceptButton, DeclineButton } from './styles';

const cookies = new Cookies();

const CookiePopup = () => {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = cookies.get('cookieConsent');
    if (consent === 'accepted' || consent === 'declined') {
      // O usuário já tomou uma decisão, não exiba mais o popup.
      setAccepted(consent === 'accepted');
    }
  }, []);

  const handleAccept = () => {
    setAccepted(true);
    cookies.set('cookieConsent', 'accepted', { maxAge: 31536000 });
  };

  const handleDecline = () => {
    setAccepted(false);
    cookies.set('cookieConsent', 'declined', { maxAge: 31536000 });
  };

  if (accepted === true || accepted === false) {
    // O usuário já tomou uma decisão, não exiba mais o popup.
    return null;
  }

  return (
    <Container>
      <Content>
        <p>
          Este site utiliza cookies para melhorar a sua experiência. Ao
          continuar a navegar, você concorda com o uso de cookies.
        </p>
        <AcceptButton type="button" onClick={handleAccept}>
          Aceitar
        </AcceptButton>
        <DeclineButton type="button" onClick={handleDecline}>
          Rejeitar
        </DeclineButton>
      </Content>
    </Container>
  );
};

export default CookiePopup;
