import { useContext, useState } from 'react';
import { stuff } from './App.jsx';
import "./Field.css";
import Lists from './Lists.jsx';
import ReadList from "./ReadList.jsx";
import CreateList from "./CreateList.jsx";

const baseUrl = 'http://localhost:8383';

function Field() {
    const { mode, setMode, activeListId, setActiveListId } = useContext(stuff);
    const [data, setData] = useState([]);

    async function getInfo() {
        const res = await fetch(baseUrl, { method: 'GET' });
        const json = await res.json();
        return json.info;
    }

    async function sendInfo(updatedData) {
        await fetch(baseUrl, { 
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ parcel: updatedData })
        });
    }

    function updateData(index, updatedList) {
        const newData = data.map((list, i) => i === index ? updatedList : list);
        setData(newData);
        sendInfo(newData);
    }

    function removeData(index) {
        const newData = data.filter((_, i) => i !== index);
        setData(newData);
        sendInfo(newData);
    }

    getInfo().then(setData);

    return (
        <main>
            {mode === "lists" && (
                <Lists data={data} />
            )}
            {mode === "read" && activeListId !== null && (
                <ReadList
                    data={data[activeListId]}
                    index={activeListId}
                    updateData={updateData}
                    removeData={removeData}
                    onBack={() => { setActiveListId(null); setMode("lists"); }}
                />
            )}
            {mode === "create" && (
                <CreateList 
                    onBack={(newList) => {
                        if (newList) sendInfo([...data, newList]); 
                        setMode("lists");
                    }} 
                />
            )}
        </main>
    );
}

export default Field;