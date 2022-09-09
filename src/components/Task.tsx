import styles from './Task.module.css';

export function Task() {
	return (
		<div className={styles.taskList}>
			<header>
				<div className={styles.taskListHeader}>
					<p>Tasks created</p>
					<span>5</span>
				</div>
                <div className={styles.taskListHeader}>
					<p>Done</p>
					<span>2 of 5</span>
				</div>
			</header>
		</div>
	);
}
