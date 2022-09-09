import styles from './NewTask.module.css';

export function NewTask() {
	return (
		<form className={styles.newTask}>
            <input type="text"placeholder='Add a new task' />
            <button type="submit">Create</button>
        </form>
	);
}
