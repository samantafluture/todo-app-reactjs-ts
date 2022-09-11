import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export interface TaskProps {
	id?: number;
	content: string;
	isCompleted: boolean;
}

export function Task({ isCompleted = false, content }: TaskProps) {
	return (
		<div className={styles.task}>
			<input
				type='checkbox'
				title='Check task'
				defaultChecked={isCompleted}
			/>
			<p className={styles.taskContent}>{content}</p>
			<button title='Delete task' className={styles.deleteTask}>
				<Trash size={16} />
			</button>
		</div>
	);
}
