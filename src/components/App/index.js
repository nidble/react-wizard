import React, { useState } from 'react';
import Step1 from '../Step1';
import Step2 from '../Step2';
import Step3 from '../Step3';
import './Style.css';

function App() {
  const [step, setStep] = useState(0);
  const [reset, setReset] = useState(0);

  return (
    <>
      <h1>
        Seminar <span>Registration</span>
      </h1>
      <form key={reset} action="#" method="post">
        <Step1 stepCompleted={() => setStep(1)} />
        <Step2 isVisible={step >= 1} stepCompleted={() => setStep(2)} />
        <Step3
          isVisible={step >= 2}
          stepCompleted={() => setReset(reset + 1) || setStep(0)}
        />
      </form>
    </>
  );
}

export default App;
