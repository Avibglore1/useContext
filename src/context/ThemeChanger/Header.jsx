import React,{ useContext } from "react";
import { ThemeWrapper } from "../../App";
function Header(){
    console.log('rendered Header');
    console.log("```````````");
    return(
        <div style={{border: '1px solid', padding: '1rem', margin:'1rem'}}>
            <div>Header</div>
            <div>↧↧↧</div>
            <Options></Options>
            <Options></Options>
            <Options></Options>
            <div>--------------------</div>
        </div>
    )
}

function Options(){
    const isDark=useContext(ThemeWrapper)
    return <div className={`${isDark?'light':'dark'}`}>Option</div>
}

export default Header