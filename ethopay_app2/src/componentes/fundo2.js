import React from 'react';
import imagemDeFundo from './img/fundodois.png';

const FundoDois = () => {
  const estiloDoFundo = {
    backgroundImage: `url(${imagemDeFundo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100vh', 
  };

  return (
    <div style={estiloDoFundo}>
      {
        <estiloDoFundo/>
      }
    </div>
  );
};

export default FundoDois;