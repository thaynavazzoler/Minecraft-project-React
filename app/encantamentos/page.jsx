

import styles from './page.module.css';



const Page_de_encantamentos = () => {
    return (
        <main className={styles.main}>

            <div className={styles.main_container}>
                <h1 className={styles.titles}>Encantamentos</h1> <h2 className={styles.sigilos_subTitles}>Encantamentos</h2>
                <p>Encantamentos são habilidades que podem ser adicionadas a armas e armaduras para melhorar suas características. Existem 3 tipos de encantamentos: Encantamentos de armadura, Encantamentos de armas e Encantamentos de ferramentas.
                    Alem disso existem encantamentos que podem ser aplicados em qualquer item, como o encantamento Maldição do ligamento, que impede que o item seja retirado do jogador, ou o encantamento Maldição do desaparecimento, que faz com que o item desapareça ao morrer.</p>

                <h2>Encantamentos de armadura</h2>
                <p>Os encantamentos de armadura são encantamentos que podem ser aplicados em armaduras. Eles são divididos em 4 categorias: Encantamentos de capacete, Encantamentos de peitoral, Encantamentos de calças e Encantamentos de botas.</p>
            </div>


                    <nav className={styles.books_container}>


                        <ul className={styles.encantamentos_container}>
                            <li className={styles.encantamentos}>
                                <img className={styles.encantamentos_img} src="/images/encantamentos/encantamentos_de_armadura/encantamento_de_protecao.png" alt="encantamento de proteção" />
                                <p className={styles.encantamentos_name}>Protecao</p>
                            </li>
                            <li className={styles.encantamentos}>
                                <img className={styles.encantamentos_img} src="/images/encantamentos/encantamentos_de_armadura/encantamento_de_respiracao.png" alt="encantamento de respiração" />
                                <p className={styles.encantamentos_name}>Respiracao</p>
                            </li>
                            <li className={styles.encantamentos}>
                                <img className={styles.encantamentos_img} src="/images/encantamentos/encantamentos_de_armadura/encantamento_de_respiracao_aquatica.png" alt="encantamento de respiração aquatica" />
                                <p className={styles.encantamentos_name}>Respiraco aquatica</p>
                            </li>
                        </ul>
                 
                    </nav>
        </main>

    )
}

export default Page_de_encantamentos;