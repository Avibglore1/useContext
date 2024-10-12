import React from 'react'
import { useContext } from 'react';
const ContextWrapper = React.createContext()
function Solution() {
  const value=10;
  return (
    <>
      <div>PropdrillingSolution</div>
      <ContextWrapper.Provider value={value}>
         <Grandparent></Grandparent>
      </ContextWrapper.Provider>
      
    </>
  )
}

function Grandparent() {
  
  return (
    <>
      <h2>GrandPArent</h2>
      <Parent></Parent>
    </>
    
  )
}
function Parent() {
 
  return (
   <>
    <h2>Parent</h2>
    <Child></Child>
   </>
  )
}
function Child() {
  const message = useContext(ContextWrapper);
  return (
    <>
      <h2>Child</h2>
      <div>FinalValue: {message}</div>
     </>
  )
}
export default Solution