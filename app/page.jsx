import Header from './components/header/header'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.back}>
        <div className={styles.container1}>
          <div className={styles.divHeader}>
            <h1 className={styles.tituloHeader}>Minecraft news</h1>
          </div>
          <div>
            <img className={styles.imagemHeader} src="" />
          </div>
          <div className={styles.divHeader2}>
            <h1 className={styles.tituloCards}>Featured</h1>
          </div>
          <div className={styles.container2}>
            <div className={styles.container3}>
              <h1>Atualização Trails & Tales está no ar!</h1>
            </div>
            <div className={styles.container4}>
              <h1>Minecraft Legends lançou!</h1>
            </div>
          </div>
        </div>

          <div className={styles.cardContainer}>
            <div className={styles.card1}>
              <img src="https://www.minecraft.net/content/dam/games/dungeons/key-art/md25-header.jpg.transform/minecraft-image-small/image.jpg" />
              <h3 className={styles.pAzul}>27 de setembro de 2023</h3>
              <p> Minecraft Dungeons passa de 25 milhões de jogadores</p>
            </div>

            <div className={styles.card2}>
              <img src="https://cdn2.unrealengine.com/fortnite-battle-royale-v26-00-sep-6-hotfix-1900x600-f9c76d99b886.jpg" />
              <h3 className={styles.pAzul}>22 de outubro de 2023!</h3>
              <p>AJUSTE DO BATTLE ROYALE DE 6 DE SETEMBRO: PEM QUEBRADOR DE ESCUDO E MAIS!!</p>
            </div>

            <div className={styles.card3}>
              <img className={styles.imgFooter} src="https://cdn2.unrealengine.com/summer-escape-header-1900x600-6d21ba26b832.jpg" />
              <h3 className={styles.pAzul}>30 de outubro de 2023!</h3>
              <p>MERGULHE NA FUGA DE VERÃO DO FORTNITE!</p>
            </div>
          </div>
          <div>

          </div>
          <img className={styles.footerimg} src="minefooter.jpg" alt="" />
        

      </div>
    </>
  )
}
