

import styles from './page.module.css';



const Page_de_encantamentos = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container_text}>
                <h1 className={styles.titles}>ENCANTAMENTOS</h1> <h2 className={styles.subTitles}>ENCANTAMENTOS</h2>
                <nav className={styles.encantamentos}>
                    <ul className={styles.lista_encantamentos}>
                        <li className={styles.encantamento}>
                            <img className={styles.book} src="/Enchanted_Book.webp" alt="encantamento" />
                            <h2 className={styles.nome_encantamento}> Afiacao</h2>
                        </li>
                        <li className={styles.encantamento}>
                            <img className={styles.book} src="/Enchanted_Book.webp" alt="encantamento" />
                            <h2 className={styles.nome_encantamento}> protecao</h2>
                        </li>
                        <li className={styles.encantamento}>
                            <img className={styles.book} src="/Enchanted_Book.webp" alt="encantamento" />
                            <h2 className={styles.nome_encantamento}> Aspecto de fogo</h2>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </main>

    )
}

export default Page_de_encantamentos;