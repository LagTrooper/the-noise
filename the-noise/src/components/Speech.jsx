import React from 'react';

function Example() {
  const utterance = new SpeechSynthesisUtterance(
    'la place de la femme cest à la cuisine'
  );
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
