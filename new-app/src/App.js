import React from 'react';
import logo from './logo.svg';
import './App.css';

//pages
import Counter from '../src/pages/Counter'
//components
import Header from '../src/components/Header'

function App() {
  return (
    <div>

      <Header />
      <Counter />
    </div>
  );
}

export default App;
