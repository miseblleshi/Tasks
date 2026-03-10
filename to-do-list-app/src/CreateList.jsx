import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateTask from './CreateTask.jsx';
import './CreateList.css';

function CreateList({ onBack }) {
	const [title, setTitle] = useState('');
	const [tasks, setTasks] = useState([]);

	function addTask() {
		setTasks([...tasks, { id: tasks.length, content: '', completed: false }]);
	}

	function removeTask(id) {
		setTasks(tasks.filter(t => t.id !== id));
	}

	function updateTask(id, key, value) {
		setTasks(tasks.map(t => t.id === id ? { ...t, [key]: value } : t));
	}

	function handleBack() {
		const newList = {
			title: title || "No title",
			tasks: tasks.map(t => ({ content: t.content, completed: t.completed }))
		};
		onBack(newList);
	}

	return (
		<div id="createlist">
			<div id="new_title_header">
				<button onClick={handleBack}>
					<FontAwesomeIcon icon="arrow-left" className='headerBackArrow' />
				</button>
				<input
					type="text"
					placeholder="No title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button id="add" onClick={addTask}>+</button>
			</div>
			<div>
				{tasks.map(task => (
					<CreateTask
						key={task.id}
						content={task.content}
						completed={task.completed}
						onChange={(key, value) => updateTask(task.id, key, value)}
						onRemove={() => removeTask(task.id)}
					/>
				))}
			</div>
		</div>
	);
}

export default CreateList;