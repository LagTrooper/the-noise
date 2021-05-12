import React from 'react';
import './Speech.css';

function Speech(props) {
  const utterance = new SpeechSynthesisUtterance(props.song);
  utterance.lang = 'en-EN';
  utterance.rate = props.rate;
  utterance.pitch = props.pitch;

  return (
    <div classname="song-button">
      <button class="play-button" onClick={() => speechSynthesis.speak(utterance)}>Play</button>
      <button class="stop-button" onClick={() => speechSynthesis.cancel()}>Stop</button>
    </div>
  );
}

export default Speech;
