import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, Key, useState } from 'react';

import { Task } from './Task';

import styles from './TasksList.module.css';

export function TasksList() {
	const [tasks, setTasks] = useState([{
		content: 'Buy cat food',
		isComplete: false,
	}]);
	const [newTask, setNewTask] = useState({
		content: '',
		isComplete: false,
	});

	const isNewTaskInvalid = newTask.content.length == 0;

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();
        setTasks([...tasks, newTask]);
		setNewTask({ content: '', isComplete: false });
	}

	function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity('');
		setNewTask({ content: event.target.value, isComplete: false });
	}

	function handleNewInvalidTask(event: InvalidEvent<HTMLInputElement>) {
		event.target.setCustomValidity('This field is required!');
	}

	function deleteTask(taskToDelete: {}) {
		const tasksWithoutDeletedOne = tasks.filter((task) => {
			return task.content != taskToDelete;
		});
		setTasks(tasksWithoutDeletedOne);
	}

	console.log(tasks);

	return (
		<main>
			<form onSubmit={handleCreateNewTask} className={styles.newTask}>
				<input
					type='text'
					placeholder='Add a new task'
					name='task'
                    value={newTask.content}
					onChange={handleNewTask}
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
					<span>{tasks.length}</span>
				</div>
				<div className={styles.counterInfo}>
					<p>Done</p>
					<span>
						{tasks.length} of {tasks.length}
					</span>
				</div>
			</div>

			{tasks.map((task) => {
				return (
					<Task
						key={task.content}
						content={task.content}
						OnDeleteTask={deleteTask}
						isComplete
					/>
				);
			})}
		</main>
	);
}
