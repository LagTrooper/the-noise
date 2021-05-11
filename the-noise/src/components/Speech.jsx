import React from 'react';

function Speech(props) {
  const utterance = new SpeechSynthesisUtterance(props.song);
  utterance.lang = 'en-EN';
  utterance.rate = props.rate;
  utterance.pitch = props.pitch;

  return (
    <div>
      <button onClick={() => speechSynthesis.speak(utterance)}>Speak</button>
      <button onClick={() => speechSynthesis.cancel()}>Stop</button>
    </div>
  );
}

export default Speech;
