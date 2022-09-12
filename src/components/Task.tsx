import { useState } from 'react';
import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export interface TaskProps {
	content: string;
	isComplete?: boolean;
	OnDeleteTask: (task: string) => void;
}

export function Task({ content, OnDeleteTask, isComplete }: TaskProps) {
	const [isChecked, setIsChecked] = useState(false);

	function handleCompleteTask() {
		setIsChecked(!isChecked);
		!isChecked ? isComplete = true : isComplete = false;
		console.log(isComplete);
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
