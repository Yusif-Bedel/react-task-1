import  { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{ backgroundColor: darkMode ? '#222' : '#fff', color: darkMode ? 'orangered' : '#222',height:'100vh',margin:"-8px"  }}>
      <button onClick={toggleDarkMode} style={{padding:'12px',borderRadius:'6px'}}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h1 style={{marginLeft:"475px"}}>WELCOME TO REACT JS</h1>

    </div>
  );
};

export default App;