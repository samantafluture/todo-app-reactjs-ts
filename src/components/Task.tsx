import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export interface TaskProps {
	content: string;
	isCompleted?: boolean;
	OnDeleteTask: (task: string) => void;
}

export function Task({
	isCompleted = false,
	content,
	OnDeleteTask,
}: TaskProps) {
	function handleDeleteTask() {
		OnDeleteTask(content);
	}

	return (
		<div className={styles.task}>
			<input
				type='checkbox'
				title='Check task'
				defaultChecked={isCompleted}
			/>
			<p className={styles.taskContent}>{content}</p>
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
