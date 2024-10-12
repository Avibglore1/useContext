import {Routes,Route} from 'react-router-dom';
import Home from './context/ThemeChanger/Home';
import './App.css'
import PageNotFound from './context/ThemeChanger/PageNotFound'
import React,{ useState } from 'react';

export const ThemeWrapper = React.createContext();

function App() {
  const [isDark, updateTheme] = useState(false);
  const handleToggleTheme = () =>{
    return updateTheme(!isDark)
  }
  
  return (
    <>
        <h1>App Component</h1>

        <button onClick={handleToggleTheme}>Toggle Theme</button>
        <ThemeWrapper.Provider value={isDark}>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </ThemeWrapper.Provider>
        
    </>
  )
}

export default App
