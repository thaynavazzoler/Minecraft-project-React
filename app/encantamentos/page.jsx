

import Header from '../components/header/header';
import styles from './page.module.css';



const Page_de_encantamentos = () => {
    return (
        <main className={styles.main}>
            <Header />
            <h1 className={styles.titles}>Encantamentos</h1>
            <h2 className={styles.subTitles}>Encantamentos</h2>
            <div className={styles.main_container}>
                <nav className={styles.encantamentos_container}>
                    <ul className={styles.encantamentos_list}>
                        <li className={styles.encantamento}>
                            <h2>
                                <span className={styles.encantamento_name}>Protecao</span>
                                <span className={styles.encantamento_level}>I</span>
                            </h2>
                            <h2 className={styles.encantamento_name_sigla}>Protecao</h2>
                        </li>

                        <li className={styles.encantamento}>
                            <h2>
                                <span className={styles.encantamento_name}>Protecao</span>
                                <span className={styles.encantamento_level}>I</span>
                            </h2>
                            <h2 className={styles.encantamento_name_sigla}>Protecao</h2>
                        </li>

                        <li className={styles.encantamento}>
                            <h2>
                                <img className={styles.encantamento_img} src="/Enchanted_Book.webp" alt="logo" width={64} height={64} />
                                <span className={styles.encantamento_name}>Protecao</span>
                                <span className={styles.encantamento_level}>I</span>
                            </h2>
                            <h2 className={styles.encantamento_name_sigla}>Protecao</h2>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>

    )
}

export default Page_de_encantamentos;