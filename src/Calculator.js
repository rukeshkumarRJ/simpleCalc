import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS file for styling

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearExpression();
    } else if (value === '←') {
      deleteLastCharacter();
    } else {
      updateExpression(value);
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(expression);
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };

  const clearExpression = () => {
    setExpression('');
    setOutput('');
  };

  const deleteLastCharacter = () => {
    setExpression(expression.slice(0, -1));
    setOutput('');
  };

  const updateExpression = (value) => {
    setExpression(expression + value);
    setOutput('');
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="calculator-input">
        <input type="text" value={expression} readOnly /><br/>
        <input type="text" value={output} readOnly /><br/>
      </div>
      <div className="calculator-buttons">
        <button style={{paddingRight:'160px'}} onClick={() => handleButtonClick('C')}>C</button>
        
        <button onClick={() => handleButtonClick('←')}>←</button>

        <br />
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <br />
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <br />
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <br />
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
