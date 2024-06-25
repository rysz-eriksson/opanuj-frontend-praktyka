import React, { useState } from 'react';
import { NumbersManipulationFn } from './calculations/dataManipulation';
import { InputList } from './inputs/inputList';
import { CalculateButtonsList } from './calculations/calculateButtonsList';

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const computeNumbers = (func: NumbersManipulationFn) => {
    setResult(func(numA, numB));
  };

  return (
    <div>
      <InputList inputs={[setNumA, setNumB]} />
      <CalculateButtonsList computeNumbers={computeNumbers}/>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
