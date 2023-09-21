import React, { useState } from 'react';
import {Container} from './styles';

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
        <div className="cookie-content">
          <h2>Política de Privacidade</h2>
          <p>Texto da sua política de privacidade aqui...</p>
          <button onClick={handleAccept}>Aceitar Cookies</button>
        </div>
      </Container>
    )
  );
};

export default CookiePopup;