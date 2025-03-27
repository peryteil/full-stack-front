
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    axios.get('/localhost:8080/api/time GET')
      .then(response => {
        setCurrentTime(response.data);
      })
      .catch(error => {
        console.log('API 호출 중 오류 발생', error);
      });
  }, []);
  return (
    <div className="App">
      <h1>현재시간</h1>
      <p>{currentTime}</p>
    </div>
  );
}

export default App;
