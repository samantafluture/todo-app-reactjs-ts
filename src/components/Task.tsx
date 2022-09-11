import { Trash, Check } from 'phosphor-react';

import styles from './Task.module.css';

export function Task() {
	return (
			<div className={styles.task}>
                <input type="checkbox" className={styles.taskCheckbox} />
				<article className={styles.taskContent}>Task</article>
                <Trash size={16} weight="bold" />
			</div>
            
	);
}
