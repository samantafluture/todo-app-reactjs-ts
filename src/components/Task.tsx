import { useState } from 'react';
import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export interface TaskProps {
	content: string;
	isComplete: boolean;
	OnDeleteTask: (task: string) => void;
}

export function Task({ content, OnDeleteTask, isComplete }: TaskProps) {
	const [isChecked, setIsChecked] = useState(isComplete);

	function handleCompleteTask() {
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
				defaultChecked={isComplete}
				onChange={handleCompleteTask}
			/>
			<p
				className={
					isChecked ? styles.taskContentChecked : styles.taskContent
				}
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
