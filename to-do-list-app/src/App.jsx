import { useState, createContext } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Header from './Header.jsx';
import Field from './Field.jsx';

library.add(faTrash, faArrowLeft)
export const stuff = createContext();

function App() {
	const [mode, setMode] = useState("lists"); // "lists" | "read" | "create"
	const [activeListId, setActiveListId] = useState(null);

	return (
		<stuff.Provider value={{ mode, setMode, activeListId, setActiveListId }}>
			<Header />
			<Field />
		</stuff.Provider>
	)
}

export default App;