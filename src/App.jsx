
import React, { useState } from 'react';
import Phase1 from './Phase1';
import Phase2 from './Phase2';
import Phase3 from './Phase3';

export default function App() {
  const [phase, setPhase] = useState(1);
  const [accountData, setAccountData] = useState([]);
  const [language, setLanguage] = useState('en');

  return (
    <>
      {phase === 1 && <Phase1 onNext={() => setPhase(2)} language={language} setLanguage={setLanguage} />}
      {phase === 2 && (
        <Phase2
          language={language}
          onNext={(data) => {
            setAccountData(data);
            setPhase(3);
          }}
          onBack={() => setPhase(1)}
        />
      )}
      {phase === 3 && (
        <Phase3
          data={accountData}
          onBack={() => setPhase(2)}
        />
      )}
    </>
  );
}
