import React from 'react'

function Propdrilling() {
  const value=10;
  return (
    <>
      <div>Propdrilling</div>
      <Grandparent value={value}></Grandparent>
    </>
  )
}

function Grandparent(props) {
  const value = props.value;
  return (
    <>
      <h2>GrandPArent</h2>
      <Parent value = {value}></Parent>
    </>
    
  )
}
function Parent(props) {
  const newValue = props.value;
  return (
   <>
    <h2>Parent</h2>
    <Child value = {newValue}></Child>
   </>
  )
}
function Child(props) {
  const finalValue = props.value;
  return (
    <>
      <h2>Child</h2>
      <div>FinalValue: {finalValue}</div>
     </>
  )
}
export default Propdrilling