import { PlusCircle, ClipboardText  } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Task } from './Task';

import styles from './TasksList.module.css';

export function TasksList() {
	const [tasks, setTasks] = useState([
		{
			content: 'Buy cat food',
			isComplete: false,
		},
		{
			content: 'Read React.js new documentation',
			isComplete: true,
		},
	]);
	const [newTask, setNewTask] = useState({
		content: '',
		isComplete: false,
	});
	const [completedTasksCount, setCompletedTasksCount] = useState(0);

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

	function deleteTask(taskToDelete: string) {
		const tasksWithoutDeletedOne = tasks.filter((task) => {
			return task.content != taskToDelete;
		});
		setTasks(tasksWithoutDeletedOne);
	}

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
						{completedTasksCount} of {tasks.length}
					</span>
				</div>
			</div>

			{
				tasks.length > 0 
				? 
					tasks.map((task) => {
						return (
							<Task
								key={task.content}
								content={task.content}
								OnDeleteTask={deleteTask}
								isComplete={task.isComplete}
								setCompletedTasksCount={setCompletedTasksCount}
							/>
						);
					})
				:
					<div className={styles.noTasks}>
						<ClipboardText size={56} weight="thin" />
						<p>You don't have any task yet</p>
						<p>Create tasks and organize your to do list</p>
					</div>
			}
		</main>
	);
}
