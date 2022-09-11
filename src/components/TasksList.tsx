import { PlusCircle } from 'phosphor-react';

import { Task, TaskProps } from './Task';

import styles from './TasksList.module.css';

interface Task extends TaskProps {}

const tasks: Task[] = [
	{
		id: 1,
		content: 'Buy cat food',
		isCompleted: false,
	},
	{
		id: 2,
		content: 'Go to the supermarket',
		isCompleted: true,
	},
];

export function TasksList() {
	return (
		<main>
			<form className={styles.newTask}>
				<input type='text' placeholder='Add a new task' name='task' />
				<button type='submit'>
					<span>Create</span>
					<PlusCircle size={16} />
				</button>
			</form>

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

			{tasks.map((task) => {
					return (
						<Task
							key={task.id}
							content={task.content}
							isCompleted={task.isCompleted}
						/>
					);
			})}
		</main>
	);
}
