import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));


const NavBar = (props)=>{
    console.log('NavBar function over here');
    return (<><h1>Welcome {props.name} 🙌 & {props.name2}</h1>
    <p>loremlhhkhkuhkjlhhkhkuhkjlhhkhkuhkjlhhkhkuhkjlhhkhkuhkjlhhkhkuhkj</p>
    </>)
}

const Time=()=>{
    const time = new Date().toLocaleTimeString()
    return <h1 className='time'>Time: {time}</h1>
}

setInterval(()=>{
    root.render(<>
        <Time/>  
        <NavBar name='abhi' name2='amit'></NavBar>
            <h1>Our First React Time App❤️</h1>
            <p>TIME WEB APPLICATION</p>
        </>)
}, 1000)