import styles from './page.module.css'

export default function Home() {
  return (
    <>

      <div className={styles.container1}>
        <div className={styles.divHeader}>
          <h1 className={styles.tituloHeader}>Minecraft news</h1>
          <img src=""/>
        </div>
        <div>
          <h1 className={styles.tituloCards}>Featured</h1>
        </div>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <h1>CONHEÇA AIRPHORIA NO FORTNITE: A CAÇA AOS TÊNIS SUPREMA DA NIKE!!</h1>
          </div>
          <div className={styles.container4}>
            <h1>
              CRIE AGORA MESMO A SUA PRÓPRIA SKIN!</h1>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.card1}>
            <img src="https://cdn2.unrealengine.com/fortnite-island-creator-rules-1900x600-a829c3da1d8f.jpg" />
            <h3 className={styles.pAzul}>15 de outubro de 2023!</h3>
            <p>REGRAS PARA CRIADORES DE ILHAS DO FORTNITE!</p>
          </div>

          <div className={styles.card2}>
            <img src="https://cdn2.unrealengine.com/fortnite-battle-royale-v26-00-sep-6-hotfix-1900x600-f9c76d99b886.jpg" />
            <h3 className={styles.pAzul}>22 de outubro de 2023!</h3>
            <p>AJUSTE DO BATTLE ROYALE DE 6 DE SETEMBRO: PEM QUEBRADOR DE ESCUDO E MAIS!!</p>
          </div>

          <div className={styles.card3}>
            <img src="https://cdn2.unrealengine.com/summer-escape-header-1900x600-6d21ba26b832.jpg" />
            <h3 className={styles.pAzul}>30 de outubro de 2023!</h3>
            <p>MERGULHE NA FUGA DE VERÃO DO FORTNITE!</p>
          </div>
        </div>

      </div>


    </>
  )
}
