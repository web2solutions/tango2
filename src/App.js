import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [num, setNum] = useState('')
  const [nextN, setnextN] = useState('')
  const handleBlur = (e) => {
    e.preventDefault();
    const n = e.target.value;
    setNum(n)
    if (n === '') {
      return;
    }
    axios.get(`http://localhost:3000/api/${n}`)
      .then(function (response) {
        setnextN(response.data.f)
      });
  }

  return (
    <div className="App-header">
      <input type="text" aria-label="number-input" value={num} onChange={handleBlur} />
      <p aria-label="result-info">{nextN}</p>
    </div>
  );
}

export default App;
