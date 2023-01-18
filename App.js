import './App.css';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import MainContent from './components/MainContent';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  }

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false)
  }

  useEffect(() => {
    const userLoginInfo = localStorage.getItem("isLoggedIn");
    if(userLoginInfo === "1"){
      setIsLoggedIn(true)
    }
  }, [])
  return (
    <Box height="100vh" bgcolor="background.default">
     {!isLoggedIn && <Login login={loginHandler}/>}
      {isLoggedIn && <MainContent logout={logoutHandler}/>}
     </Box>

  );
}

export default App;
