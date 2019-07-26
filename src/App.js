import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import './reset.css';
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [reset, setReset] = useState(0);

  return (
    <>
      <h1>
        Seminar <span>Registration</span>
      </h1>
      <form key={reset} action="#" method="post">
        <Step1 onCompleted={() => setStep(1)} />
        <Step2 isVisible={step >= 1} onCompleted={() => setStep(2)} />
        <Step3 isVisible={step >= 2} onCompleted={() => setReset(reset + 1)} />
      </form>
    </>
  );
}

export default App;
