import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CreateTask.css';

function CreateTask({ content = "", completed = false, onChange, onRemove }) {
	return (
		<div className='createTask'>
			<input
				type='checkbox'
				checked={completed}
				onChange={e => onChange("completed", e.target.checked)}
			/>
			<input
				type='text'
				placeholder='Enter Task...'
				value={content}
				onChange={e => onChange("content", e.target.value)}
				style={{
					textDecoration: completed ? 'line-through' : 'none',
					textDecorationColor: completed ? 'var(--accentcolour)' : 'inherit'
				}}
			/>
			<button type="button" onClick={onRemove}>
				<FontAwesomeIcon icon="trash" className="trashIcon" />
			</button>
		</div>
	);
}

export default CreateTask;