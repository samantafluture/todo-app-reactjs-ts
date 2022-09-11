import { Header } from './components/Header';
import { TasksList } from './components/TasksList';

import styles from './App.module.css';
import './global.css';

export function App() {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<TasksList />
			</div>
		</>
	);
}
