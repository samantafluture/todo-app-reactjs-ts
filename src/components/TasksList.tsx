import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Task } from './Task';

import styles from './TasksList.module.css';

export function TasksList() {
	const [tasks, setTasks] = useState(['Buy cat food']);
	const [newTask, setNewTask] = useState('');

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();
		setTasks([...tasks, newTask]);
		setNewTask('');
	}

	function handleNewCommentTask(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity('');
		setNewTask(event.target.value);
	}

	function handleNewInvalidTask(event: InvalidEvent<HTMLInputElement>) {
		event.target.setCustomValidity('This field is required!');
	}

	function deleteTask(taskToDelete: string) {
		const tasksWithoutDeletedOne = tasks.filter((task) => {
			return task != taskToDelete;
		});
		setTasks(tasksWithoutDeletedOne);
	}

	const isNewTaskInvalid = newTask.length == 0;

	return (
		<main>
			<form onSubmit={handleCreateNewTask} className={styles.newTask}>
				<input
					type='text'
					placeholder='Add a new task'
					name='task'
					value={newTask}
					onChange={handleNewCommentTask}
					onInvalid={handleNewInvalidTask}
					required
				/>
				<button type='submit' disabled={isNewTaskInvalid}>
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
					<Task key={task} content={task} OnDeleteTask={deleteTask} isCompleted />
				);
			})}
		</main>
	);
}
