import React, { useState, useEffect } from 'react';

import clickSound from './click.mp3';
import './App.css'

function App() {
  const [display, setDisplay] = useState('0');
  const [result, setResult] = useState(''); 
  const [clickAudio] = useState(new Audio(clickSound));

  clickAudio.preload = 'auto';
 

  const handleButtonClick = (value) => {
    if (display === '0' && !'+-*/'.includes(value)) {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
    clickAudio.play();
  };

  const handleEqualClick = () => {
    try {
      setResult(eval(display).toString()); 
      setDisplay('0');                    
    } catch (error) {
      setResult('Error');                 
    }
  };
  const handleClearClick = () => {
    setDisplay('0');
    setResult('');
  };
  const handleClearEntryClick = () => {
    if (display.length === 1 || display === 'Error') {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
    clickAudio.play();
  };
  

  useEffect(() => {
    return () => {
      clickAudio.pause();
      clickAudio.currentTime = 0;
    };
  }, []);
  
  return (
    <div className='container'>
      <form action=''>
        <div className='title'>
          {/* <h1>Scientific Calculator</h1> */}
        </div>
        <div className='result'>
          <input className="result_box" type='text' value={result} readOnly />
          <input className="display_box" type='text' value={display} readOnly />
        </div>
        <div className='btns'>
            <input type='button' className="buttons clear_btn" value="AC" onClick={handleClearClick}></input>
            <input type='button' className="buttons" value="CE" onClick={handleClearEntryClick}></input>
            <input type='button' className="buttons" value="%" onClick={() => handleButtonClick('%')}></input>
            <input type='button' className="buttons" value="/" onClick={() => handleButtonClick('/')}></input>
            
        </div>
        <div className='btns'>
            <input type='button' className="buttons" value="7" onClick={() => handleButtonClick('7')}></input>
            <input type='button' className="buttons" value="8" onClick={() => handleButtonClick('8')}></input>
            <input type='button' className="buttons" value="9" onClick={() => handleButtonClick('9')}></input>
            <input type='button' className="buttons" value="x" onClick={() => handleButtonClick('*')}></input>
            
        </div>
        <div className='btns'>
            <input type='button' className="buttons" value="4" onClick={() => handleButtonClick('4')}></input>
             <input type='button' className="buttons" value="5" onClick={() => handleButtonClick('5')}></input>
             <input type='button' className="buttons" value="6" onClick={() => handleButtonClick('6')}></input>
             <input type='button' className="buttons" value="-" onClick={() => handleButtonClick('-')}></input>
        </div>
        <div className='btns'>
             <input type='button' className="buttons" value="1" onClick={() => handleButtonClick('1')}></input>
             <input type='button' className="buttons" value="2" onClick={() => handleButtonClick('2')}></input>
             <input type='button' className="buttons" value="3" onClick={() => handleButtonClick('3')}></input>
             <input type='button' className="buttons" value="+" onClick={() => handleButtonClick('+')}></input>
        </div>
        <div className='btns'>
             <input type='button' className="buttons" value="00" onClick={() => handleButtonClick('00')}></input>
             <input type='button' className="buttons" value="0" onClick={() => handleButtonClick('0')}></input>
             <input type='button' className="buttons" value="." onClick={() => handleButtonClick('.')}></input>
             <input type='button' className="buttons equal_btn" value="=" onClick={handleEqualClick}></input>
             </div>
      </form>
    </div>
  );
}

export default App;
