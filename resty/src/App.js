import React from 'react';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Footer from './components/footer/footer.js';
import './App.css';

// App component
function App() {
  return (
    <div className="App">
      {/* HEADER COMPONENT */}
      <Header />
      <Form />
      <Footer />
    </div>
  );
}


export default App;
