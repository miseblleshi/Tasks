import { useContext } from 'react';
import { stuff } from './App.jsx';
import './CreateListButton.css';

function CreateListButton() {
    const { setMode } = useContext(stuff);
    
    return(
        <button id='newList' onClick={() => setMode("create")}>New List</button>
    )
}

export default CreateListButton;