import React from 'react';

function Example({ song }) {
  const utterance = new SpeechSynthesisUtterance({ song });
  utterance.lang = 'fr-FR';
  utterance.rate = 10;
  utterance.pitch = 1.5;

  return (
    <div>
      <button onClick={() => speechSynthesis.speak(utterance)}>Speak</button>
      <button onClick={() => speechSynthesis.cancel()}>Stop</button>
    </div>
  );
}

export default Example;
