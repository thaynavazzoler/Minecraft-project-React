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
              <p> MINECRAFT DUNGEONS PASSA DE 25 MILHÕES DE JOGADORES</p>
            </div>

            <div className={styles.card2}>
              <img src="armamentoMIne.jpg" />
              <h3 className={styles.pAzul}>22 de outubro de 2023!</h3>
              <p>VEJA TODOS OS ARMAMENTOS DO MINECRAFT AGORA MESMO!!!</p>
            </div>

            <div className={styles.card3}>
              <img className={styles.imgFooter} src="encantamentoMine.png"/>
              <h3 className={styles.pAzul}>30 de outubro de 2023!</h3>
              <p>VEJA TODOS OS ENCANTAMENTOS DO MINECRAFT AGORA MESMO!!</p>
            </div>
          </div>
          <div>

          </div>
          <img className={styles.footerimg} src="minefooter.jpg" alt="" />
        

      </div>
    </>
  )
}
