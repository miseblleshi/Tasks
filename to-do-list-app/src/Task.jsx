import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Task.css';

function Task({ content, completed = false, onToggle, onRemove, onEdit }) {
	return (
		<div className='task'>
			<div className='insideTask'>
				<input
					type="checkbox"
					checked={completed}
					onChange={e => onToggle(e.target.checked)}
				/>
				<input
					type="text"
					value={content}
					onChange={e => onEdit(e.target.value)}
					style={{
						textDecoration: completed ? 'line-through' : 'none',
						textDecorationColor: completed ? 'var(--accentcolour)' : 'inherit'
					}}
					placeholder='No text'
				/>
			</div>

			<button id="remove" onClick={onRemove} style={{display: completed ? 'block' : 'none'}}>
				<FontAwesomeIcon icon="trash" className="trashIcon" />
			</button>
		</div>
	);
}

export default Task;