import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskCounter } from './components/TaskCounter';

import styles from './App.module.css';
import './global.css';
import { Task } from './components/Task';

export function App() {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<NewTask />
				<TaskCounter />
				<Task />
				<Task />
				<Task />
				<Task />
			</div>
		</>
	);
}
