import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export function Task() {
	return (
		<div className={styles.task}>
			<input type='checkbox' title='Check task' />
			<article className={styles.taskContent}>Task</article>
			<button type='button' title='Delete task' className={styles.deleteTask}>
				<Trash size={16} />
			</button>
		</div>
	);
}
