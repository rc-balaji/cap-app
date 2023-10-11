import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  return (
    <div>
      <h1>Add Two Numbers</h1>
      <input
        type="number"
        placeholder="Enter number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={addNumbers}>Add</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
