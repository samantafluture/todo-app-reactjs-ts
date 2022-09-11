import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskCounter } from './components/TaskCounter';
import { Task } from './components/Task';

import { TaskProps } from './components/Task';

import styles from './App.module.css';
import './global.css';

interface Task extends TaskProps {}

const tasks: Task[] = [
	{
		id: 1,
		content: 'Buy cat food',
		isCompleted: false
	},
	{
		id: 2,
		content: 'Go to the supermarket',
		isCompleted: true
	},
]

export function App() {
	
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<NewTask />
				<TaskCounter />
				<main>
					{ 
						tasks.map(task => {
							return(
								<Task 
									key={task.id}
									content={task.content}
									isCompleted={task.isCompleted}
								/>
							);
						})
					}
				</main>
				
			</div>
		</>
	);
}
