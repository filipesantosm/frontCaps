import React, { useState } from 'react';
import {Container, Content} from './styles';

interface CookiePopupProps {
  onAccept: () => void;
}

const CookiePopup: React.FC<CookiePopupProps> = ({ onAccept }) => {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    setShowPopup(true);
    onAccept();
  };

  return (
    showPopup && (
      <Container>
        <Content>
          <h2>Política de Privacidade</h2>
          <p>Texto da sua política de privacidade aqui...</p>
          <button onClick={handleAccept}>Aceitar Cookies</button>
        </Content>
      </Container>
    )
  );
};

export default CookiePopup;