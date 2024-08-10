import styles from "./footer.module.css"

export interface FooterInterface {
    completedTasks: number
    totalTasks: number
}

export default function Footer({ completedTasks, totalTasks } : FooterInterface) {
    return (
        <div className={styles.footer}>
            <span className={styles.item}>Completed Tasks : {completedTasks}</span>
            <span className={styles.item}>Total Tasks: {totalTasks}</span>
        </div>
    )
}