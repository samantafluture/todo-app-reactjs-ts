import styles from './TaskCounter.module.css';

export function TaskCounter() {
	return (
			<div className={styles.taskCounter}>
				<div className={styles.counterInfo}>
					<p>Created Tasks</p>
					<span>5</span>
				</div>
                <div className={styles.counterInfo}>
					<p>Done</p>
					<span>2 of 5</span>
				</div>
			</div>
	);
}
