// components/CookiePopup.tsx
import { useState } from 'react';
import { Content, Container } from './styles';

const CookiePopup = () => {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  const handleAccept = () => {
    setAccepted(true);
    // Aqui você pode adicionar lógica para armazenar o consentimento do usuário em um cookie ou no localStorage.
  };

  const handleDecline = () => {
    setAccepted(false);
    // Aqui você pode adicionar lógica para registrar a recusa do usuário em um cookie ou no localStorage.
  };

  if (accepted === true || accepted === false) {
    // O usuário já tomou uma decisão, não exiba mais o popup.
    return null;
  }

  return (
    <Container>
      <Content>
        <p>
          Este site utiliza cookies para melhorar a sua experiência. Ao continuar a navegar, você concorda com o uso de cookies.
        </p>
        <button onClick={handleAccept}>Aceitar</button>
        <button onClick={handleDecline}>Recusar</button>
      </Content>
    </Container>
  );
};

export default CookiePopup;