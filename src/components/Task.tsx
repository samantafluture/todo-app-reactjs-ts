import { useState } from 'react';
import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export interface TaskProps {
	content: string;
	isCompleted?: boolean,
	OnDeleteTask: (task: string) => void;
}

export function Task({ content, OnDeleteTask, isCompleted }: TaskProps) {
	const [isChecked, setIsChecked] = useState(false);

	function handleCheckboxValue() {
		setIsChecked(!isChecked);
	}

	function handleDeleteTask() {
		OnDeleteTask(content);
	}

	return (
		<div className={styles.task}>
			<input
				type='checkbox'
				title='Check task'
				defaultChecked={isChecked}
				onChange={handleCheckboxValue}
			/>
			<p 
				className={isChecked ? styles.taskContentChecked : styles.taskContent}

			>
				{content}
			</p>
			<button
				onClick={handleDeleteTask}
				title='Delete task'
				className={styles.deleteTask}
			>
				<Trash size={16} />
			</button>
		</div>
	);
}
