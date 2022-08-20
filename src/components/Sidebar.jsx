import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=50" />

            <div className={styles.profile}>
                <strong>John Doe</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="">Editar seu perfil</a>
            </footer>
        </aside>
    )
}