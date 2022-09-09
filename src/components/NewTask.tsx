import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';

export function NewTask() {
	return (
		<form className={styles.newTask}>
            <input type="text"placeholder='Add a new task' />
            <button type="submit">
                <span>Create</span>
                <PlusCircle size={16}/>
            </button>
        </form>
	);
}
