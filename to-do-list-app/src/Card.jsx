import { useContext } from 'react';
import { stuff } from './App.jsx';
import './Card.css';

function Card({ id, title, task1, task2 }) {
    const { setActiveListId, setMode } = useContext(stuff);
    const onSelectList = id => { setActiveListId(id); setMode("read"); }
    
    return(
        <div className="card" onClick={() => onSelectList(id)} onDoubleClick={() => console.log("Miseb")}>
            <h2>{title}</h2>
            <h3>{task1}</h3>
            <h3>{task2}</h3>
        </div>
    )
}

export default Card;