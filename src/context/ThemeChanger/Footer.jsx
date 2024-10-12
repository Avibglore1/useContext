import { ThemeWrapper } from "../../App";
import { useContext } from "react";

function Footer(){
    console.log('rendered Header');
    console.log("```````````");
    return(
        <div style={{border: '1px solid', padding: '1rem', margin:'1rem'}}>
            <div>Footer</div>
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

export default Footer