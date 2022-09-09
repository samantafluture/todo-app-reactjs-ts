import styles from './Header.module.css';

import logoImage from '../assets/rocket.svg';

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={logoImage} alt='ToDo App Logo' />
				<h1>to<span>do</span></h1>
			</div>
		</header>
	);
}
