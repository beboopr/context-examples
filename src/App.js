import { useState, createContext } from 'react'
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

export const UserContext = createContext(null) // UserContext always has a uppercase letter at first

function App() {
  const [user, setUser] = useState ('Captain ED')
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <Main />
    </UserContext.Provider>
  );
}

export default App;
