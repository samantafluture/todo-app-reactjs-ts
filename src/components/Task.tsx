import {
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export interface TaskProps {
	content: string;
	isComplete: boolean;
	OnDeleteTask: (task: string) => void;
	setCompletedTasksCount: Dispatch<SetStateAction<number>>;
}

export function Task({
	content,
	OnDeleteTask,
	isComplete,
	setCompletedTasksCount,
}: TaskProps) {
	const [isChecked, setIsChecked] = useState(isComplete);

	function handleCheckTask() {
		setIsChecked(!isChecked);
	}

	function handleDeleteTask() {
		OnDeleteTask(content);
	}

	useEffect(() => {
		if (!isChecked) {
			setCompletedTasksCount((prevCount) => {
				if (prevCount !== 0) {
					return prevCount - 1;
				}

				return prevCount;
			});
		}
		if (isChecked) {
			setCompletedTasksCount((prevCount) => prevCount + 1);
		}
	}, [isChecked, setCompletedTasksCount]);

	return (
		<div className={styles.task}>
			<input
				type='checkbox'
				title='Check task'
				defaultChecked={isChecked}
				onChange={handleCheckTask}
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
