import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Loader from './components/Loader';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  const [appRendered, setAppRendered] = useState(false);

  useEffect(() => {
    // Simulate some asynchronous operation during App component rendering
    const simulateAsyncOperation = async () => {
      // Simulate the time it takes for the App component to render
      await new Promise(resolve => setTimeout(resolve, 2000));
      setAppRendered(true);
    };

    simulateAsyncOperation();
  }, []);

  return (
    <React.StrictMode>
      {appRendered ? <App /> : <Loader />}
    </React.StrictMode>
  );
};

root.render(<Index />);

reportWebVitals();
