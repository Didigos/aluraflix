import styles from './Botao.module.css'

function Botao({ children }) {
    return (
        <button type='submit' className={styles.botao}>
            {children}
        </button>
    )
}

export default Botao