import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';

import styles from './App.module.css';
import './global.css';

export function App() {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<NewTask />
				<Task />
			</div>
		</>
	);
}
