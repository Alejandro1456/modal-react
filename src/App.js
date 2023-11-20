import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsModalOpen(true)}>Abrir Modal</button>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
