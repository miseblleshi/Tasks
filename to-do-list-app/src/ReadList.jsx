import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ReadList.css';
import Task from './Task.jsx';

function ReadList({ data, index, onBack, updateData, removeData }) {
	const [title, setTitle] = useState(data.title);
	const [tasks, setTasks] = useState(data.tasks);

	function toggleTask(idx, completed) {
		setTasks(tasks.map((t, i) => i === idx ? { ...t, completed } : t));
	}

	function editTask(idx, newContent) {
		setTasks(tasks.map((t, i) => i === idx ? { ...t, content: newContent } : t));
	}

	function removeTask(idx) {
		setTasks(tasks.filter((_, i) => i !== idx));
	}

	function addTask() {
		setTasks([...tasks, { content: "", completed: false }]);
	}

	function handleBack() {
		const updatedList = { ...data, title, tasks };
		updateData(index, updatedList);
		onBack();
	}

	function handleDeleteList() {
		removeData(index);
		onBack();
	}

	return (
		<div id="readlist">
			<div id="title_header">
				<button onClick={handleBack}>
					<FontAwesomeIcon icon="arrow-left" className='headerBackArrow' />
				</button>
				<input
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
					placeholder="No title"
				/>
				<button id="add" onClick={addTask}>+</button>
				<button onClick={handleDeleteList} title="Delete list">
					<FontAwesomeIcon icon="trash" className="trashIcon" />
				</button>
			</div>

			<div>
				{tasks.map((task, i) => (
					<Task
						key={i}
						content={task.content}
						completed={task.completed}
						onToggle={(checked) => toggleTask(i, checked)}
						onEdit={(newContent) => editTask(i, newContent)}
						onRemove={() => removeTask(i)}
					/>
				))}
			</div>
		</div>
	);
}

export default ReadList;